import gql from 'graphql-tag';

export const LIST_POSTS_FEED = gql`
  query listPostsFeed {
    listPostsFeed {
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

export const GET_POST = gql`
  query getPost($postId: String!) {
    getPost(postId: $postId) {
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
  }
`;

export default {
  LIST_POSTS_FEED,
  GET_POST
};
