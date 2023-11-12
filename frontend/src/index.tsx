import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Connect to GraphQL backend Server
const client = new ApolloClient({
  uri: process.env.REACT_APP_DATABASE_URI,
  cache: new InMemoryCache(),
});

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);


