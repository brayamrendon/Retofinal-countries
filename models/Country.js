const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
  name: { type: String, required: true },
  continent: { type: String, required: true },
  capital: String,
  language: String,
  currency: String,
});

const Country = mongoose.model('Country', countrySchema);

module.exports = Country;