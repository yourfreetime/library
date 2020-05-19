import { GET_USER_DETAILS } from '../queries';

export const uCreateFollow = ({ userId }, cache, { data }) => {
  const dataUser = cache.readQuery({
    query: GET_USER_DETAILS,
    variables: { userId }
  });

  cache.writeQuery({
    query: GET_USER_DETAILS,
    variables: { userId },
    data: { ...dataUser, listFollowers: data.createFollow }
  });
};

export const uDeleteFollow = ({ userId }, cache, { data }) => {
  const dataUser = cache.readQuery({
    query: GET_USER_DETAILS,
    variables: { userId }
  });

  cache.writeQuery({
    query: GET_USER_DETAILS,
    variables: { userId },
    data: { ...dataUser, listFollowers: data.deleteFollow }
  });
};
