import { Link } from 'react-router-dom';
import * as z from 'zod';

// import { Button } from '@/components/Elements';
import { Form, InputField } from '@/components/Form';
import { usePopularMovies } from '../api/getPopularMovies';
import { useState } from 'react';

const schema = z.object({
    movie: z.string().min(1, "There's not a movie without name :( Please, insert a name."),
});

type MovieValues = {
    movie: string;
}

type MoviesFormProps = {
    onSuccess: () => void;
}

export const MoviesForm = ({onSuccess}: MoviesFormProps) => {
  const [movies, setMovies] = useState(usePopularMovies({}));
  const [moviesList, setMoviesList] = useState(movies.data);
  console.log(movies);
    return (
        <div>
            <Form<MovieValues, typeof schema>
            onSubmit={() => {
                onSuccess();
            }}
            schema={schema}
            > 
            {({ register, formState }) => (
                <>
                  <InputField
                    type="text"
                    label="Movie"
                    placeholder=""
                    error={formState.errors['movie']}
                    registration={register('movie')}
                  />
                  <div>
                    <input type="submit" value="Search"/>
                  </div>
                </>
              )}
            </Form>
            
            {moviesList?.results.map(movie => {
              return (
                <div>
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />

                </div>
              )
            })}
        </div>
    )
}