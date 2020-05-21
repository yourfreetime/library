import gql from 'graphql-tag';

export const CREATE_SAVED_POST = gql`
  mutation createSavedPost($postId: String!) {
    createSavedPost(input: { postId: $postId }) {
      date
      post {
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
  }
`;

export const DELETE_SAVED_POST = gql`
  mutation deleteSavedPost($postId: String!) {
    deleteSavedPost(input: { postId: $postId }) {
      date
      post {
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
  }
`;
