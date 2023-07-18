import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import Category from '../Category';
import movieReducer from '../../../moviesSlice';
import { configureStore } from '@reduxjs/toolkit';


describe('<Category />', () => {
    let store;
    let component;

    beforeEach(() => {
        store = configureStore(
            {
                reducer: {
                    movies: movieReducer,
                },
            }
        );

        component = render(
            <Provider store={store}>
                <Category movies={[]} categories={['Comedy', 'Animation', 'Thriller']} handleChange={() => { }} />
            </Provider>
        );
    });

    test('should update the list of movies in the Redux store when the select changes', () => {
        const { getByTestId } = component;
        const selectElement = getByTestId('category-select');

        fireEvent.change(selectElement, { target: { value: 'Comedy' } });

        const actions = store.getActions();
        expect(actions).toHaveLength(1);
        expect(actions[0].type).toEqual('movies/updateMovies'); // Assuming there is an 'updateMovies' action type
        expect(actions[0].payload).toEqual(expect.arrayContaining(movies.filter(movie => movie.category === 'Comedy')));
    });
});
