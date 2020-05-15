import { LIST_POSTS_FEED } from '../queries';

export const uCreateComment = ({ postId }, cache, { data }) => {
  const { listPostsFeed } = cache.readQuery({ query: LIST_POSTS_FEED });

  const posts = listPostsFeed.map(item =>
    item.id === postId ? { ...item, comments: data.createComment } : item
  );

  cache.writeQuery({
    query: LIST_POSTS_FEED,
    data: { listPostsFeed: posts }
  });
};
