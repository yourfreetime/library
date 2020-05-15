import gql from 'graphql-tag';

export const CREATE_POST = gql`
  mutation createPost($text: String!) {
    createPost(input: { text: $text }) {
      id
      text
      dateCreated
      author {
        id
        name
        picture
      }
      likes {
        date
        user {
          id
        }
      }
      comments {
        dateCreated
      }
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($postId: String!) {
    deletePost(input: { postId: $postId })
  }
`;

export const UPDATE_POST = gql`
  mutation updatePost($text: String!, $postId: String!) {
    updatePost(input: { text: $text, postId: $postId }) {
      id
      text
      dateCreated
      author {
        id
        name
        picture
      }
      likes {
        date
        user {
          id
        }
      }
      comments {
        dateCreated
      }
    }
  }
`;
