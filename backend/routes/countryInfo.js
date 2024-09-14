const express = require('express');
const axios = require('axios');
const router = express.Router();

// Endopoint to get more detailed info
router.get('/:countryCode', async (req, res) => {
  const countryCode = req.params.countryCode;

  try {
    // Country info
    const countryInfo = await axios.get(`https://date.nager.at/api/v3/CountryInfo/${countryCode}`);
    const borderCountries = countryInfo.data.borders;

    // Population history
    const populationData = await axios.post('https://countriesnow.space/api/v0.1/countries/population', {
      country: countryInfo.data.commonName
    });

    // Flag URL
    const flagData = await axios.post('https://countriesnow.space/api/v0.1/countries/flag/images', {
      country: countryInfo.data.commonName
    });

    res.json({
      country: countryInfo.data,
      borders: borderCountries,
      population: populationData.data.data.populationCounts,
      flagUrl: flagData.data.data.flag
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener información del país' });
  }
});

module.exports = router;
