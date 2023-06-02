/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { moviesData } from '../../data/movie';

export const fetchMovies = createAsyncThunk('get/movies', async () => {
  const response = await moviesData;
  return response;
});

export const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    categories: []
  },
  reducers: {
    removeMovie: (state, action) => {
      state.movies = state.movies.filter((movie) => movie.id !== action.payload.id);
    },
    likeMovie: (state, action) => {
      state.movies = state.movies.map(movie => {
        if(movie.id === action.payload.id) {
          movie.likes = parseInt(movie.likes) + 1;
          movie.liked = true;
        }
        return movie;
      })
    },
    unlickedMovie: (state, action) => {
      state.movies = state.movies.map(movie => {
        if(movie.id === action.payload.id) {
          movie.likes = parseInt(movie.likes) - 1;
          movie.liked = false;
        }
        return movie;
      })
    },
    getCategories: (state) => {
      state.movies.forEach(movie => {
        if(!state.categories.includes(movie.category)) {
          state.categories.push(movie.category);
        }
      });
    },
  },
  extraReducers: {
    [fetchMovies.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchMovies.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.movies = action.payload;
    },
    [fetchMovies.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const { removeMovie, likeMovie, unlickedMovie, getCategories, getMovies } = movieSlice.actions;

export const selectMovies = (state) => state.movies.movies;
export const selectCategories = (state) => state.movies.categories;


export default movieSlice.reducer;
