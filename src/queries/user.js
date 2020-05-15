import gql from 'graphql-tag';

export const GET_USER_DETAILS = gql`
  query getUser($userId: String!) {
    getUser(userId: $userId) {
      id
      name
      picture
      savedPosts {
        date
      }
    }
    listFollowers(filter: { userId: $userId }) {
      user {
        name
      }
    }
    listPosts(filter: { authorId: $userId }) {
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
