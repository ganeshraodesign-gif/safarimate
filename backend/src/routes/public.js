const express = require('express');
const router = express.Router();

const cityPricing = {
  mumbai: { basePrice: 2000, perHour: 300, description: 'Financial capital of India' },
  delhi: { basePrice: 1800, perHour: 250, description: 'Capital city with rich history' },
  jaipur: { basePrice: 1500, perHour: 200, description: 'Pink City of India' },
  agra: { basePrice: 1200, perHour: 150, description: 'Home to Taj Mahal' },
  goa: { basePrice: 1600, perHour: 220, description: 'Beach paradise' },
  varanasi: { basePrice: 1300, perHour: 180, description: 'Spiritual capital of India' },
  bangalore: { basePrice: 2000, perHour: 300, description: 'Silicon Valley of India' },
  chennai: { basePrice: 1700, perHour: 240, description: 'Cultural capital of South' },
  kolkata: { basePrice: 1500, perHour: 200, description: 'City of joy' },
  udaipur: { basePrice: 1400, perHour: 190, description: 'City of lakes' }
};

router.get('/cities/pricing', (req, res) => {
  try {
    const { city } = req.query;
    
    if (city) {
      const pricing = cityPricing[city.toLowerCase()];
      if (!pricing) {
        return res.status(404).json({ message: 'City not found' });
      }
      return res.json({ city: city.toLowerCase(), ...pricing });
    }
    
    res.json(cityPricing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
