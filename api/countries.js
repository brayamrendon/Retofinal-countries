import connectDB from '../db';
import Country from '../models/Country';

connectDB(); // base de datos

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // lista de paises
    try {
      const countries = await Country.find();
      res.status(200).json(countries);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener la lista de países' });
    }
  } else if (req.method === 'POST') {
    // Crea un nuevo país
    const { name, continent, capital, language, currency } = req.body;

    try {
      const newCountry = new Country({
        name,
        continent,
        capital,
        language,
        currency,
      });

      await newCountry.save();
      res.status(201).json({ message: 'País creado exitosamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear el país' });
    }
  }
}