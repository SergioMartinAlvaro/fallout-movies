import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { useQuery } from 'react-query';

 import { MovieTypes } from '../types';

export const getMovieFiltered = async (): Promise<MovieTypes> => {
  return axios.get('/movie/popular', {
    params: {
      api_key: '8f781d70654b5a6f2fa69770d1d115a3',
      language: 'en-US',
      page: '1'
    }
  })
}

type QueryFnType = typeof getMovieFiltered;

type GetPopularMoviesOptions = {
  config?: QueryConfig<QueryFnType>
}

export const useSearchMovie = ({config}: GetPopularMoviesOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['comments'],
    queryFn: () => getMovieFiltered(),
    ...config,
  });
};
