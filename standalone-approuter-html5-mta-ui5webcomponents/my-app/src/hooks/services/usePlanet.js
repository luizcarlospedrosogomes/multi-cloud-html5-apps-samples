import { useQuery } from 'react-query';

import Request from '../../api/Request';

export const useTodos = (page) => {
  return useQuery(
    ['all-todos', page],
    async () => {
      const { data } = await Request.get('planets');
      return data.results;
    },
    {
      keepPreviousData: true
    }
  );
};

export const useTodo = (id) => {
  return useQuery(['planets', id], async () => {
    const { data } = await Request.get(`planets/${id}`);
    return data;
  });
};
