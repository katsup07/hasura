import { ApolloProvider, useQuery, gql } from '@apollo/client';
import { client } from './apolloClient';
import { useUsersQuery } from './generated/graphql';

const Users = () => {

  const { data, loading, error } = useUsersQuery();

  if (loading) return <p>Loading...</p>;
  
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data?.users.map((user) => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
}

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <h1>Apollo Client + Hasura Example</h1>
      <Users />
    </ApolloProvider>
  );
}