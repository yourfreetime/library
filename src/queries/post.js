import gql from 'graphql-tag';

export const LIST_POSTS_FEED = gql`
  query listPostsFeed($search: String) {
    listPostsFeed(filter: { search: $search }) {
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

export const LIST_POSTS_BY_LOCATION = gql`
  query listPostsByLocation($latitude: Float!, $longitude: Float!) {
    listPostsByLocation(
      filter: { latitude: $latitude, longitude: $longitude }
    ) {
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
  GET_POST,
};
