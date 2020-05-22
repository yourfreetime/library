import { GET_USER_DETAILS, LIST_SAVED_POSTS } from '../queries';

export const uCreateSavedPost = ({ userId }, cache, { data }) => {
  try {
    const cacheGetUser = cache.readQuery({
      query: GET_USER_DETAILS,
      variables: { userId }
    });

    cache.writeQuery({
      query: GET_USER_DETAILS,
      variables: { userId },
      data: {
        ...cacheGetUser,
        getUser: { ...cacheGetUser.getUser, savedPosts: data.createSavedPost }
      }
    });
  } catch (e) {
    //
  }

  try {
    const cacheListSavedPosts = cache.readQuery({
      query: LIST_SAVED_POSTS,
      variables: { userId }
    });

    cache.writeQuery({
      query: LIST_SAVED_POSTS,
      variables: { userId },
      data: {
        ...cacheListSavedPosts,
        getUser: {
          ...cacheListSavedPosts.getUser,
          savedPosts: data.createSavedPost
        }
      }
    });
  } catch (e) {
    //
  }
};

export const uDeleteSavedPost = ({ userId }, cache, { data }) => {
  try {
    const cacheGetUser = cache.readQuery({
      query: GET_USER_DETAILS,
      variables: { userId }
    });

    cache.writeQuery({
      query: GET_USER_DETAILS,
      variables: { userId },
      data: {
        ...cacheGetUser,
        getUser: { ...cacheGetUser.getUser, savedPosts: data.deleteSavedPost }
      }
    });
  } catch (e) {
    //
  }

  try {
    const cacheListSavedPosts = cache.readQuery({
      query: LIST_SAVED_POSTS,
      variables: { userId }
    });

    cache.writeQuery({
      query: LIST_SAVED_POSTS,
      variables: { userId },
      data: {
        ...cacheListSavedPosts,
        getUser: {
          ...cacheListSavedPosts.getUser,
          savedPosts: data.deleteSavedPost
        }
      }
    });
  } catch (e) {
    //
  }
};
