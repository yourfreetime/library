import gql from 'graphql-tag';

export const LIST_USERS = gql`
  query listUsers($search: String) {
    listUsers(filter: { search: $search }) {
      id
      name
      picture
      savedPosts {
        date
      }
    }
  }
`;

export const GET_USER_DETAILS = gql`
  query getUser($userId: String!) {
    getUser(userId: $userId) {
      id
      name
      picture
      savedPosts {
        id
        date
      }
    }
    listFollowers(filter: { userId: $userId }) {
      user {
        id
        name
      }
      userFollow {
        id
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
