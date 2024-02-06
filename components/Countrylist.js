import React from 'react';

const CountryList = ({ countries, searchTerm }) => {
  // Filtra la lista de países basándote en el searchTerm
  const filteredCountries = countries.filter((country) => {
    // Convertir el nombre del país a minúsculas
    const countryName = country.name.toLowerCase();
    // Convertir el searchTerm a minúsculas
    const search = searchTerm.toLowerCase();
    // Verificar si el nombre del país incluye el searchTerm
    return countryName.includes(search);
  });

  // Renderiza la lista de países filtrada
  return (
    <div className="country-list">
      {filteredCountries.map((country) => (
        <div key={country.name} className="country-card">
          <h3>{country.name}</h3>
          
        </div>
      ))}
    </div>
  );
};

export default CountryList;