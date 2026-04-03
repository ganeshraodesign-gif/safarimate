require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');

const authRoutes = require('./src/routes/auth');
const travelersRoutes = require('./src/routes/travelers');
const guidesRoutes = require('./src/routes/guides');
const adminRoutes = require('./src/routes/admin');
const publicRoutes = require('./src/routes/public');

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api', authRoutes);
app.use('/api/travelers', travelersRoutes);
app.use('/api/guides', guidesRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api', publicRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
