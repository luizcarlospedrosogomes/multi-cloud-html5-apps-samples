import { useQuery } from 'react-query';

import Request from '../../api/Request';

export const usePlanets = (page) => {
  return useQuery(
    ['all-planets', page],
    async () => {
      const { data } = await Request.get('/planets', {
        params: {
          page
        }
      });
      return data;
    },
    {
      keepPreviousData: true
    }
  );
};

export const usePlanet = (id) => {
  return useQuery(['planets', id], async () => {
    const { data } = await Request.get(`/planets/${id}`);
    return data;
  });
};
