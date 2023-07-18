import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import movieReducer, { fetchMovies, removeMovie, likeMovie, unlickedMovie, getCategories } from '../../../moviesSlice';
import { Movies } from '../../../Movies';
import { configureStore } from '@reduxjs/toolkit';

jest.mock('../../../moviesSlice', () => ({
    fetchMovies: jest.fn(),
    removeMovie: jest.fn(),
    likeMovie: jest.fn(),
    unlickedMovie: jest.fn(),
    getCategories: jest.fn(),
}));

const mockStore = configureStore({
    reducer: {
        movies: movieReducer,
    },
});
const initialState = {};
const store = mockStore(initialState);

describe('Movies', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <Movies />
            </Provider>
        );
    });

    it('should dispatch fetchMovies on mount', () => {
        expect(fetchMovies).toHaveBeenCalled();
        expect(store.getActions()).toContainEqual(fetchMovies());
    });

    it('should dispatch getCategories on mount', () => {
        expect(getCategories).toHaveBeenCalled();
        expect(store.getActions()).toContainEqual(getCategories());
    });

    it('should render movie cards', () => {
        const mockMovies = [
            { id: 1, title: 'Movie 1', genre: 'Action' },
            { id: 2, title: 'Movie 2', genre: 'Comedy' },
        ];

        jest.spyOn(React, 'useSelector').mockReturnValueOnce(mockMovies).mockReturnValueOnce([]);

        const movieCards = screen.getAllByTestId('movie-card');
        expect(movieCards).toHaveLength(mockMovies.length);
    });

    it('should dispatch removeMovie when removing a movie', () => {
        const mockMovie = { id: 1, title: 'Movie 1', genre: 'Action' };
        jest.spyOn(React, 'useSelector').mockReturnValueOnce([mockMovie]).mockReturnValueOnce([]);

        fireEvent.click(screen.getByTestId('remove-movie-button'));

        expect(removeMovie).toHaveBeenCalledWith(mockMovie);
        expect(store.getActions()).toContainEqual(removeMovie(mockMovie));
    });

    it('should dispatch likeMovie when liking a movie', () => {
        const mockMovie = { id: 1, title: 'Movie 1', genre: 'Action' };
        jest.spyOn(React, 'useSelector').mockReturnValueOnce([mockMovie]).mockReturnValueOnce([]);

        fireEvent.click(screen.getByTestId('like-movie-button'));

        expect(likeMovie).toHaveBeenCalledWith(mockMovie);
        expect(store.getActions()).toContainEqual(likeMovie(mockMovie));
    });

    it('should dispatch unlickedMovie when unliking a movie', () => {
        const mockMovie = { id: 1, title: 'Movie 1', genre: 'Action' };
        jest.spyOn(React, 'useSelector').mockReturnValueOnce([mockMovie]).mockReturnValueOnce([]);

        fireEvent.click(screen.getByTestId('unlike-movie-button'));

        expect(unlickedMovie).toHaveBeenCalledWith(mockMovie);
        expect(store.getActions()).toContainEqual(unlickedMovie(mockMovie));
    });
});
