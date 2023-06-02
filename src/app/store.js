import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/movies/moviesSlice';

export default configureStore({
  reducer: {
    movies: movieReducer,
  },
});
