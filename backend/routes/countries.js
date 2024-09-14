const express = require('express');
const axios = require('axios');
const router = express.Router();

// Endpoint to get countries list
router.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://date.nager.at/api/v3/AvailableCountries');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la lista de países' });
  }
});

module.exports = router;
