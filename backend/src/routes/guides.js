const express = require('express');
const router = express.Router();
const Guide = require('../models/Guide');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

const JWT_SECRET = process.env.JWT_SECRET || 'safarimate_secret_key';

router.post('/register', async (req, res) => {
  try {
    const { name, email, phone, country, language, password, city, languages, education, experience, pricePerDay } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      name, email, phone, role: 'guide', country, language, password: hashedPassword
    });
    await user.save();

    const guide = new Guide({
      userId: user._id,
      city,
      languages: languages || [],
      education,
      experience,
      pricePerDay,
      verifiedStatus: 'pending'
    });
    await guide.save();

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: '7d' });

    res.status(201).json({ token, guide });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const { city, language, minPrice, maxPrice } = req.query;
    const query = { verifiedStatus: 'verified' };
    
    if (city) query.city = city;
    if (language) query.languages = language;
    if (minPrice || maxPrice) {
      query.pricePerDay = {};
      if (minPrice) query.pricePerDay.$gte = Number(minPrice);
      if (maxPrice) query.pricePerDay.$lte = Number(maxPrice);
    }

    const guides = await Guide.find(query)
      .populate('userId', 'name email phone country language')
      .sort({ rating: -1, tripsCompleted: -1 });
    res.json(guides);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const guide = await Guide.findById(req.params.id)
      .populate('userId', 'name email phone country language');
    
    if (!guide) {
      return res.status(404).json({ message: 'Guide not found' });
    }
    res.json(guide);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/applications', auth(['admin']), async (req, res) => {
  try {
    const guides = await Guide.find({ verifiedStatus: 'pending' })
      .populate('userId', 'name email phone country language');
    res.json(guides);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
