import { LIST_POSTS_FEED } from 'services/post';

export const updateDeletePost = ({ postId }, cache) => {
  const { listPostsFeed } = cache.readQuery({ query: LIST_POSTS_FEED });

  cache.writeQuery({
    query: LIST_POSTS_FEED,
    data: {
      listPostsFeed: listPostsFeed.filter(item => item.id !== postId)
    }
  });
};

export const updateCreatePost = (_, cache, { data }) => {
  const dataList = cache.readQuery({ query: LIST_POSTS_FEED });

  cache.writeQuery({
    query: LIST_POSTS_FEED,
    data: { listPostsFeed: [data.createPost, ...dataList.listPostsFeed] }
  });
};
