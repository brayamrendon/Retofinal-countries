import { useQuery, gql } from '@apollo/client';
import connectDB from '../db';
import client from '../lib/apollo';
import CountryList from '../components/Countrylist'
import SearchBar from '../components/SearchBar';

const COUNTRIES_QUERY = gql`
  query {
    countries {
      name
      continent {
        name
      }
      capital
      languages {
        name 
      }
      currency
    }
  }
`;

const Home = ({ countries }) => {

  const handleSearch = (searchTerm) => {
    // Filtrar los países que coincidan con el término de búsqueda
    const filteredCountries = countries.filter((country) => {
      // Convertir el nombre del país y el código a minúsculas solo si están definidos
      const countryName = country.name ? country.name.toLowerCase() : '';
      const countryCode = country.code ? country.code.toLowerCase() : '';
      const search = searchTerm.toLowerCase();
      
      // Verificar si el nombre del país o el código coinciden con el término de búsqueda
      return countryName.includes(search) || countryCode.includes(search);
    });
  
    // Imprimir los países encontrados en la consola
    console.log("Países encontrados:", filteredCountries);
  };

  return (
    <div className="home">
    <h1>Listado de Países</h1>
    <SearchBar onSearch={handleSearch} />
    <CountryList countries={countries} searchTerm={searchTerm} />
  </div>
  );
};

export async function getServerSideProps() {
  connectDB(); // Conecta la base de datos

  const { data } = await client.query({
    query: COUNTRIES_QUERY,
  });

  return {
    props: {
      countries: data.countries,
    },
  };
}

export default Home;