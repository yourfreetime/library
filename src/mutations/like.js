import gql from 'graphql-tag';

export const LIKE_POST = gql`
  mutation createLike($postId: String!) {
    createLike(input: { postId: $postId }) {
      date
      user {
        id
      }
    }
  }
`;

export const UNLIKE_POST = gql`
  mutation deleteLike($postId: String!) {
    deleteLike(input: { postId: $postId }) {
      date
      user {
        id
      }
    }
  }
`;
