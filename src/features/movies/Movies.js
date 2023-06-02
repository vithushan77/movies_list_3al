
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchMovies,
  removeMovie,
  selectMovies,
  likeMovie,
  unlickedMovie,
  getCategories,
  selectCategories,
} from './moviesSlice';
import StyledMovies from './StyledMovies';
import Cards from './components/cards/Card';
import Category from './components/category/Category';

export function Movies() {
 const dispatch = useDispatch();
 const movieSelects = useSelector(selectMovies);
 const [movies, setMovies] = useState([]);
 const categories = useSelector(selectCategories);

  useEffect(() => {
      dispatch(fetchMovies());
  }, [dispatch])

  useEffect(() => {
    dispatch(getCategories());
    setMovies(movieSelects);
  }, [dispatch, movieSelects])
  // handleChange={(data) => { setMovies(data) }}
  return (
    <StyledMovies>
      {movies && categories && <Category movies={movieSelects} categories={categories} handleChange={(data) => { setMovies(data) }} />}
      <div className='movie-card'>
        {movies && movies.map(movie => (
          <Cards key={movie.id} movie={movie} removeMovie={() => dispatch(removeMovie(movie))} likeMovie={() => dispatch(likeMovie(movie))} unlikedMovie={() => dispatch(unlickedMovie(movie))} />
        ))}
      </div>
    </StyledMovies>
  );
}
