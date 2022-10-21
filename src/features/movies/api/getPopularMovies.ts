import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { useQuery } from 'react-query';

 import { MovieTypes } from '../types';

export const getPopularMovies = async (): Promise<MovieTypes> => {
  return axios.get('/movie/popular', {
    params: {
      api_key: '8f781d70654b5a6f2fa69770d1d115a3',
      language: 'en-US',
      page: '1'
    }
  })
}

type QueryFnType = typeof getPopularMovies;

type GetPopularMoviesOptions = {
  config?: QueryConfig<QueryFnType>
}

export const usePopularMovies = ({config}: GetPopularMoviesOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: [],
    queryFn: () => getPopularMovies(),
    ...config,
  });
};
