// detalles de un país seleccionado.
import React from 'react';

const DetailsSection = ({ country }) => {
  return (
    <div className="details-section">
      <h2>Detalles de {country.name}</h2>
      <p>Capital: {country.capital}</p>
      <p>Continente: {country.continent}</p>
      
    </div>
  );
};

export default DetailsSection;