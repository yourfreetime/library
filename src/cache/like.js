import { LIST_POSTS_FEED } from '../queries';

export const uCreateLike = ({ postId }, cache, { data }) => {
  const { listPostsFeed } = cache.readQuery({ query: LIST_POSTS_FEED });

  const posts = listPostsFeed.map(item =>
    item.id === postId ? { ...item, likes: data.createLike } : item
  );

  cache.writeQuery({
    query: LIST_POSTS_FEED,
    data: { listPostsFeed: posts }
  });
};

export const uDeleteLike = ({ postId }, cache, { data }) => {
  const { listPostsFeed } = cache.readQuery({ query: LIST_POSTS_FEED });

  const posts = listPostsFeed.map(item =>
    item.id === postId ? { ...item, likes: data.deleteLike } : item
  );

  cache.writeQuery({
    query: LIST_POSTS_FEED,
    data: { listPostsFeed: posts }
  });
};
