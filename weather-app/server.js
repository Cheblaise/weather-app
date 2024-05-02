const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Fetch weather data from OpenWeatherMap API
app.get('/weather', async (req, res) => {
  const city = req.query.city;

  try {
    const response = await axios.get(https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=47b47d2974036628971eb87e2968fe4a);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Unable to fetch weather data');
  }
});

app.listen(port, () => 
  console.log(Server listening on port ${port});
});