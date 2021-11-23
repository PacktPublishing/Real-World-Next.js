import { gql } from 'graphql-request';

export default gql`
  query GetAllProducs {
    products {
      id
      name
      slug
      price
      images {
        id
        url
      }
    }
  }
`;
