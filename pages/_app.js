import { ApolloClient } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: 'https://gobag-core.herokuapp.com/graphql/',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
