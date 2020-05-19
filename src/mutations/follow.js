import gql from 'graphql-tag';

export const CREATE_FOLLOW = gql`
  mutation($userFollowId: String!) {
    createFollow(input: { userFollowId: $userFollowId }) {
      user {
        id
        name
      }
      userFollow {
        id
        name
      }
    }
  }
`;

export const DELETE_FOLLOW = gql`
  mutation($userFollowId: String!) {
    deleteFollow(input: { userFollowId: $userFollowId }) {
      user {
        id
        name
      }
      userFollow {
        id
        name
      }
    }
  }
`;
