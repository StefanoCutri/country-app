require('dotenv').config();
const express = require('express');
const cors = require('cors');

const countriesRoutes = require('./routes/countries');
const countryInfoRoutes = require('./routes/countryInfo');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000', // frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Headers
}));

// Routes
app.use('/api/countries', countriesRoutes);
app.use('/api/country', countryInfoRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
