import { gql } from 'graphql-request';

export default gql`
  query GetProductByID($ids: [ID!]) {
    products(where: { id_in: $ids }) {
      id
      name
      price
      slug
    }
  }
`;
