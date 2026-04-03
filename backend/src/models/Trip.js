const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  travelerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  guideId: { type: mongoose.Schema.Types.ObjectId, ref: 'Guide', required: true },
  city: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  serviceType: { type: String, enum: ['city_tour', 'custom'], default: 'city_tour' },
  placesToVisit: [{ type: String }],
  hoursPerDay: { type: Number, required: true },
  notes: { type: String },
  price: { type: Number, required: true },
  paymentProof: { type: String },
  paymentStatus: { type: String, enum: ['pending', 'paid', 'refunded'], default: 'pending' },
  startOtp: { type: String },
  endOtp: { type: String },
  tripStatus: { type: String, enum: ['pending', 'confirmed', 'in_progress', 'completed', 'cancelled'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Trip', tripSchema);
