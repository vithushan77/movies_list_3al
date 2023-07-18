import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../../features/movies/moviesSlice';

describe('Redux Store', () => {
    let store;

    beforeEach(() => {
        store = configureStore({
            reducer: {
                movies: movieReducer,
            },
        });
    });

    test('should have the correct initial state', () => {
        const initialState = store.getState();
        expect(initialState.movies).toBeDefined();
    });

    test('should dispatch actions and update the state correctly', () => {
        const action = { type: 'movies/addMovie', payload: { id: 1, title: 'Test Movie' } };
        store.dispatch(action);

        const updatedState = store.getState();

        expect(updatedState.movies).toEqual({ categories: [], movies: [] });
    });
});
