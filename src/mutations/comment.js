import gql from 'graphql-tag';

export const CREATE_COMMENT = gql`
  mutation createComment($text: String!, $postId: String!) {
    createComment(input: { text: $text, postId: $postId }) {
      id
      text
      user {
        id
        name
        picture
      }
      dateCreated
    }
  }
`;
