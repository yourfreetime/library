import gql from 'graphql-tag';

export const CREATE_LIKE = gql`
  mutation createLike($postId: String!) {
    createLike(input: { postId: $postId }) {
      date
      user {
        id
      }
    }
  }
`;

export const DELETE_LIKE = gql`
  mutation deleteLike($postId: String!) {
    deleteLike(input: { postId: $postId }) {
      date
      user {
        id
      }
    }
  }
`;
