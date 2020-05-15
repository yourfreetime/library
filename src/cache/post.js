import { LIST_POSTS_FEED } from '../queries';

export const deletePost = ({ postId }, cache) => {
  const { listPostsFeed } = cache.readQuery({ query: LIST_POSTS_FEED });

  cache.writeQuery({
    query: LIST_POSTS_FEED,
    data: {
      listPostsFeed: listPostsFeed.filter(item => item.id !== postId)
    }
  });
};

export const createPost = (_, cache, { data }) => {
  const dataList = cache.readQuery({ query: LIST_POSTS_FEED });

  cache.writeQuery({
    query: LIST_POSTS_FEED,
    data: { listPostsFeed: [data.createPost, ...dataList.listPostsFeed] }
  });
};

export const updatePost = ({ postId }, cache, { data }) => {
  const { listPostsFeed } = cache.readQuery({ query: LIST_POSTS_FEED });

  const posts = listPostsFeed.map(item =>
    item.id === postId ? data.updatePost : item
  );

  cache.writeQuery({
    query: LIST_POSTS_FEED,
    data: { listPostsFeed: posts }
  });
};
