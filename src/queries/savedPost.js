import gql from 'graphql-tag';

export const LIST_SAVED_POSTS = gql`
  query listSavedPosts($userId: String!) {
    getUser(userId: $userId) {
      savedPosts {
        id
        date
        post {
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
  }
`;
