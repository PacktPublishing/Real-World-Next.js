import { gql } from '@apollo/client';

const GET_LATEST_SIGNS = gql`
  query GetLatestSigns($limit: Int! = 10, $skip: Int! = 0) {
    signs(last: $limit, skip: $skip) {
      id
      createdAt
      content
      nickname
      country
    }
  }
`;

export default GET_LATEST_SIGNS;
