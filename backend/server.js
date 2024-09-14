require('dotenv').config();
const express = require('express');
const countriesRoutes = require('./routes/countries');
const countryInfoRoutes = require('./routes/countryInfo');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Routes
app.use('/api/countries', countriesRoutes);
app.use('/api/country', countryInfoRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
