const express = require('express');
const router = express.Router();
const Trip = require('../models/Trip');
const Guide = require('../models/Guide');
const User = require('../models/User');
const Review = require('../models/Review');
const auth = require('../middleware/auth');

router.get('/requests', auth(['admin']), async (req, res) => {
  try {
    const { status, city } = req.query;
    const query = {};
    if (status) query.tripStatus = status;
    if (city) query.city = city;

    const trips = await Trip.find(query)
      .populate('travelerId', 'name email phone')
      .populate('guideId', 'city pricePerDay')
      .sort({ createdAt: -1 });
    res.json(trips);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/requests/:id', auth(['admin']), async (req, res) => {
  try {
    const { tripStatus, guideId } = req.body;
    const updateData = {};
    
    if (tripStatus) updateData.tripStatus = tripStatus;
    if (guideId) {
      const guide = await Guide.findById(guideId);
      if (!guide) {
        return res.status(404).json({ message: 'Guide not found' });
      }
      updateData.guideId = guideId;
    }

    const trip = await Trip.findByIdAndUpdate(req.params.id, updateData, { new: true })
      .populate('travelerId', 'name email')
      .populate('guideId', 'city languages pricePerDay');
    
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }
    res.json(trip);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/guides/:id/verify', auth(['admin']), async (req, res) => {
  try {
    const { verifiedStatus } = req.body;
    
    const guide = await Guide.findByIdAndUpdate(
      req.params.id, 
      { verifiedStatus }, 
      { new: true }
    ).populate('userId', 'name email');
    
    if (!guide) {
      return res.status(404).json({ message: 'Guide not found' });
    }
    res.json(guide);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/otp/generate', auth(['admin']), async (req, res) => {
  try {
    const { tripId, type } = req.body;
    
    const trip = await Trip.findById(tripId);
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    
    if (type === 'start') {
      trip.startOtp = otp;
    } else if (type === 'end') {
      trip.endOtp = otp;
    } else {
      return res.status(400).json({ message: 'Invalid OTP type' });
    }

    await trip.save();
    res.json({ otp, tripId: trip._id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/otp/verify-start', auth(['admin']), async (req, res) => {
  try {
    const { tripId, otp } = req.body;
    
    const trip = await Trip.findById(tripId);
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }

    if (trip.startOtp !== otp) {
      return res.status(400).json({ message: 'Invalid OTP' });
    }

    trip.tripStatus = 'in_progress';
    trip.startOtp = null;
    await trip.save();

    res.json({ message: 'Trip started successfully', trip });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/otp/verify-end', auth(['admin']), async (req, res) => {
  try {
    const { tripId, otp } = req.body;
    
    const trip = await Trip.findById(tripId);
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }

    if (trip.endOtp !== otp) {
      return res.status(400).json({ message: 'Invalid OTP' });
    }

    trip.tripStatus = 'completed';
    trip.endOtp = null;
    await trip.save();

    await Guide.findByIdAndUpdate(trip.guideId, { $inc: { tripsCompleted: 1 } });

    res.json({ message: 'Trip completed successfully', trip });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/stats', auth(['admin']), async (req, res) => {
  try {
    const totalTrips = await Trip.countDocuments();
    const completedTrips = await Trip.countDocuments({ tripStatus: 'completed' });
    const pendingTrips = await Trip.countDocuments({ tripStatus: 'pending' });
    const totalGuides = await Guide.countDocuments();
    const verifiedGuides = await Guide.countDocuments({ verifiedStatus: 'verified' });
    const pendingGuides = await Guide.countDocuments({ verifiedStatus: 'pending' });
    const totalUsers = await User.countDocuments();
    const totalRevenue = await Trip.aggregate([
      { $match: { paymentStatus: 'paid' } },
      { $group: { _id: null, total: { $sum: '$price' } } }
    ]);

    res.json({
      trips: { total: totalTrips, completed: completedTrips, pending: pendingTrips },
      guides: { total: totalGuides, verified: verifiedGuides, pending: pendingGuides },
      users: { total: totalUsers },
      revenue: totalRevenue[0]?.total || 0
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
