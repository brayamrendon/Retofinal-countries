import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/', // URL de la API GraphQL de países
  cache: new InMemoryCache(),
});

export default client;