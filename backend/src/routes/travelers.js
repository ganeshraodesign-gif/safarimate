const express = require('express');
const router = express.Router();
const Trip = require('../models/Trip');
const Guide = require('../models/Guide');
const auth = require('../middleware/auth');

router.post('/request', auth(['traveler']), async (req, res) => {
  try {
    const { guideId, city, startDate, endDate, serviceType, placesToVisit, hoursPerDay, notes, price } = req.body;

    if (guideId) {
      const guide = await Guide.findById(guideId);
      if (!guide || guide.verifiedStatus !== 'verified') {
        return res.status(400).json({ message: 'Guide not found or not verified' });
      }
    }

    const trip = new Trip({
      travelerId: req.user.id,
      guideId,
      city,
      startDate,
      endDate,
      serviceType: serviceType || 'city_tour',
      placesToVisit: placesToVisit || [],
      hoursPerDay,
      notes,
      price,
      tripStatus: 'pending'
    });

    await trip.save();
    res.status(201).json(trip);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/requests', auth(['traveler']), async (req, res) => {
  try {
    const trips = await Trip.find({ travelerId: req.user.id })
      .populate('guideId', 'city languages pricePerDay rating')
      .sort({ createdAt: -1 });
    res.json(trips);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/requests/:id', auth(['traveler']), async (req, res) => {
  try {
    const trip = await Trip.findOne({ _id: req.params.id, travelerId: req.user.id })
      .populate('guideId', 'city languages pricePerDay rating verifiedStatus')
      .populate('travelerId', 'name email phone');
    
    if (!trip) {
      return res.status(404).json({ message: 'Request not found' });
    }
    res.json(trip);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/payment', auth(['traveler']), async (req, res) => {
  try {
    const { tripId, paymentProof } = req.body;

    const trip = await Trip.findOne({ _id: tripId, travelerId: req.user.id });
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }

    if (trip.paymentStatus === 'paid') {
      return res.status(400).json({ message: 'Payment already submitted' });
    }

    trip.paymentProof = paymentProof;
    trip.paymentStatus = 'paid';
    await trip.save();

    res.json({ message: 'Payment proof uploaded successfully', trip });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
