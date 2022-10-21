import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { useQuery } from 'react-query';

 import { MovieTypes } from '../types';

export const getMovieFiltered = async ({ query }: { query: string }): Promise<MovieTypes> => {
  return axios.get('/search/movie', {
    params: {
      api_key: '8f781d70654b5a6f2fa69770d1d115a3',
      language: 'en-US',
      page: '1',
      query
    }
  })
}

type QueryFnType = typeof getMovieFiltered;

type GetPopularMoviesOptions = {
  query: string,
  config?: QueryConfig<QueryFnType>
}

export const useMovieFiltered = ({query, config}: GetPopularMoviesOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['query', query],
    queryFn: () => getMovieFiltered({query}),
    ...config,
  });
};
