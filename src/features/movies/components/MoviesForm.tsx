import * as z from 'zod';

import { Form, InputField } from '@/components/Form';
import { Spinner } from '@/components/Elements';
import { MoviesList } from './MoviesList';
import { Button } from '@/components/Elements/Button';

const schema = z.object({
    movie: z.string().min(1, "There's not a movie without name :( Please, insert a name."),
});

type MovieValues = {
    movie: string;
}

type MoviesFormProps = {
    onSuccess: Function;
    movies: any;
    query: string;
}

export const MoviesForm = ({onSuccess, movies, query}: MoviesFormProps) => {
  if (movies.isLoading) {
    return (
      <div className="w-full h-48 flex justify-center items-center">
        <Spinner size="lg" />
      </div>
    );
  }
  
    return (
        <div>
            <Form<MovieValues, typeof schema>
            onSubmit={async (values) => {
                console.log(values)
                onSuccess(values.movie)
            }}
            schema={schema}
            > 
            {({ register, formState }) => (
                <div className="mb-6 grid grid-cols-2">
                  <InputField
                    type="text"
                    label="Movie"
                    placeholder="Insert movie title"
                    error={formState.errors['movie']}
                    registration={register('movie')}
                    className={''}
                  />
                  <div>
                    <Button type="submit" className="mt-1 flex-1 w-32 bg-orange-400">
                      Search
                    </Button>
                  </div>
                </div>
              )}
            </Form>
            
            <h2 className='mb-8 text-4xl font-bold tracking-tight text-gray-900 dark:text-white'>Most Popular</h2>
          <MoviesList movies={movies.data?.results} />
        </div>
    )
}