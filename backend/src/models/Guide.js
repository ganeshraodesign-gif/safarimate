const mongoose = require('mongoose');

const guideSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  city: { type: String, required: true },
  languages: [{ type: String }],
  education: { type: String },
  experience: { type: Number },
  pricePerDay: { type: Number, required: true },
  verifiedStatus: { type: String, enum: ['pending', 'verified', 'rejected'], default: 'pending' },
  badges: [{ type: String }],
  documents: [{ type: String }],
  rating: { type: Number, default: 0 },
  tripsCompleted: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Guide', guideSchema);
