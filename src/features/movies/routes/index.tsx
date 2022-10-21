import { Route, Routes } from 'react-router-dom';

import { SearchMovie } from './SearchMovie';

export const MoviesRoutes = () => {
  return (
    <Routes>
      <Route path="mylist" element={<SearchMovie />} />
    </Routes>
  );
};
