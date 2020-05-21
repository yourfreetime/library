import { GET_USER_DETAILS, LIST_SAVED_POSTS } from '../queries';

export const uCreateSavedPost = ({ userId }, cache, { data }) => {
  const { getUser } = cache.readQuery({
    query: GET_USER_DETAILS,
    variables: { userId }
  });
  const { getUser: listSavedPosts } = cache.readQuery({
    query: LIST_SAVED_POSTS,
    variables: { userId }
  });

  cache.writeQuery({
    query: GET_USER_DETAILS,
    variables: { userId },
    data: { ...getUser, savedPosts: data.createSavedPost }
  });
  cache.writeQuery({
    query: LIST_SAVED_POSTS,
    variables: { userId },
    data: { ...listSavedPosts, savedPosts: data.createSavedPost }
  });
};

export const uDeleteSavedPost = ({ userId }, cache, { data }) => {
  const { getUser } = cache.readQuery({
    query: GET_USER_DETAILS,
    variables: { userId }
  });
  const { getUser: listSavedPosts } = cache.readQuery({
    query: LIST_SAVED_POSTS,
    variables: { userId }
  });

  cache.writeQuery({
    query: GET_USER_DETAILS,
    variables: { userId },
    data: { ...getUser, savedPosts: data.deleteSavedPost }
  });
  cache.writeQuery({
    query: LIST_SAVED_POSTS,
    variables: { userId },
    data: { ...listSavedPosts, savedPosts: data.deleteSavedPost }
  });
};
