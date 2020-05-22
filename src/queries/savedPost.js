import gql from 'graphql-tag';

export const LIST_SAVED_POSTS = gql`
  query listSavedPosts($userId: String!) {
    listSavedPosts(filter: { userId: $userId }) {
      id
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
