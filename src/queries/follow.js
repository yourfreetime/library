import gql from 'graphql-tag';

export const LIST_FOLLOWERS = gql`
  query listFollowers($userId: String!) {
    listFollowers(filter: { userId: $userId }) {
      user {
        id
        name
        email
        picture
      }
    }
  }
`;
