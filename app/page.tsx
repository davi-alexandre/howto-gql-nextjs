'use client';
import { useQuery, gql } from '@apollo/client';

const GET_DATA = gql`
  query Query {
    hello
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <main>
      <p>This is a very fancy NextJS app</p>
      <a href="/graphql">{data.hello}</a>
    </main>
  );
}
