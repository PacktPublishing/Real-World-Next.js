import { gql } from '@apollo/client';

const ADD_SIGN = gql`
  mutation AddNewSign($nickname: String!, $content: String!, $country: String) {
    createSign(data: { nickname: $nickname, content: $content, country: $country }) {
      id
    }
  }
`;

export default ADD_SIGN;
