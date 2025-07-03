import { ApolloProvider, useQuery, gql } from '@apollo/client';
import { client } from './apolloClient';
import { useHelloQuery } from './generated/graphql';

// const HELLO_QUERY = gql`
//   query Hello {
//     hello
//   }
// `;

function Hello() {
  const { data, loading, error } = useHelloQuery();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return <div>{data?.hello}</div>;
}

export default function App() {
  return (
    <ApolloProvider client={client}>
      <h1>React + Apollo Client Example</h1>
      <Hello />
    </ApolloProvider>
  );
}
