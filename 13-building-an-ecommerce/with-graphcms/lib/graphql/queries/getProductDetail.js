import { gql } from 'graphql-request';

export default gql`
  query GetProductBySlug($slug: String!) {
    products(where: { slug: $slug }) {
      id
      images(first: 1) {
        id
        url
      }
      name
      price
      slug
      description
    }
  }
`;
