import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../../../app/store';
import Cards, { calcProgress } from '../Card';

// Mock the necessary props for the Cards component

const mockMovie = {
    id: '4',
    title: 'Sans un bruit',
    category: 'Thriller',
    likes: 6,
    dislikes: 60
};

const mockRemoveMovie = jest.fn();
const mockLikeMovie = jest.fn();
const mockUnlikeMovie = jest.fn();

test('renders movie details correctly', () => {
    const { getByText } = render(
        <Provider store={store}>
            <Cards
                movie={mockMovie}
                removeMovie={mockRemoveMovie}
                likeMovie={mockLikeMovie}
                unlikedMovie={mockUnlikeMovie}
            />
        </Provider>
    );

    expect(getByText(mockMovie.title)).toBeInTheDocument();
    expect(getByText(mockMovie.category)).toBeInTheDocument();
});

test('calls removeMovie when trash icon is clicked', () => {
    const { getByTestId } = render(
        <Provider store={store}>
            <Cards
                movie={mockMovie}
                removeMovie={mockRemoveMovie}
                likeMovie={mockLikeMovie}
                unlikedMovie={mockUnlikeMovie}
            />
        </Provider>
    );

    const trashIcon = getByTestId('trash-icon');
    fireEvent.click(trashIcon);

    expect(mockRemoveMovie).toHaveBeenCalled();
});

test('calls likeMovie when toggle icon is clicked', () => {
    const { getByTestId } = render(
        <Provider store={store}>
            <Cards
                movie={mockMovie}
                removeMovie={mockRemoveMovie}
                likeMovie={mockLikeMovie}
                unlikedMovie={mockUnlikeMovie}
            />
        </Provider>
    );

    const toggleIcon = getByTestId('toggle-icon');
    fireEvent.click(toggleIcon);

    expect(mockLikeMovie).toHaveBeenCalled();
});

test('calls unlikedMovie when toggle icon is clicked and movie is already liked', () => {
    const { getByTestId } = render(
        <Provider store={store}>
            <Cards
                movie={{ ...mockMovie, liked: true }}
                removeMovie={mockRemoveMovie}
                likeMovie={mockLikeMovie}
                unlikedMovie={mockUnlikeMovie}
            />
        </Provider>
    );

    const toggleIcon = getByTestId('toggle-icon');
    fireEvent.click(toggleIcon);

    expect(mockUnlikeMovie).toHaveBeenCalled();
});

test('renders correct progress percentage', () => {
    const { getByTestId } = render(
        <Provider store={store}>
            <Cards
                movie={mockMovie}
                removeMovie={mockRemoveMovie}
                likeMovie={mockLikeMovie}
                unlikedMovie={mockUnlikeMovie}
            />
        </Provider>
    );

    const progressElement = getByTestId('progress-bar');
    const progressLineInner = progressElement.querySelector('.react-sweet-progress-line-inner');
    const expectedProgress = calcProgress(mockMovie.likes, mockMovie.dislikes);

    expect(progressLineInner.style.width).toBe(expectedProgress + '%');
});

test('calls likeMovie when toggle icon is clicked and movie is not liked', () => {
    const { getByTestId } = render(
        <Provider store={store}>
            <Cards
                movie={{ ...mockMovie, liked: false }}
                removeMovie={mockRemoveMovie}
                likeMovie={mockLikeMovie}
                unlikedMovie={mockUnlikeMovie}
            />
        </Provider>
    );

    const toggleIcon = getByTestId('toggle-icon');
    fireEvent.click(toggleIcon);

    expect(mockLikeMovie).toHaveBeenCalled();
});

test('does not call likeMovie when toggle icon is clicked and movie is already liked', () => {
    const { getByTestId } = render(
        <Provider store={store}>
            <Cards
                movie={{ ...mockMovie, liked: true }}
                removeMovie={mockRemoveMovie}
                likeMovie={mockLikeMovie}
                unlikedMovie={mockUnlikeMovie}
            />
        </Provider>
    );

    const toggleIcon = getByTestId('toggle-icon');
    fireEvent.click(toggleIcon);

    expect(mockLikeMovie).not.toHaveBeenCalled();
});


// calcProgress
test('returns NaN when both likes and dislikes are 0', () => {
    const likes = 0;
    const dislikes = 0;
    const result = calcProgress(likes, dislikes);
    expect(result).toBe(NaN);
});

test('returns 100 when likes is greater than 0 and dislikes is 0', () => {
    const likes = 5;
    const dislikes = 0;
    const result = calcProgress(likes, dislikes);
    expect(result).toBe(100);
});

test('returns 0 when likes is 0 and dislikes is greater than 0', () => {
    const likes = 0;
    const dislikes = 5;
    const result = calcProgress(likes, dislikes);
    expect(result).toBe(0);
});

test('returns correct progress percentage when likes and dislikes are equal', () => {
    const likes = 10;
    const dislikes = 10;
    const result = calcProgress(likes, dislikes);
    expect(result).toBe(50);
});

test('returns correct progress percentage when likes and dislikes have decimal values', () => {
    const likes = 2.5;
    const dislikes = 1.5;
    const result = calcProgress(likes, dislikes);
    expect(result).toBe(66);
});

test('returns correct progress percentage when likes and dislikes are large numbers', () => {
    const likes = 1000000;
    const dislikes = 500000;
    const result = calcProgress(likes, dislikes);
    expect(result).toBe(66);
});

test('returns correct progress percentage when likes is 0 and dislikes is a negative number', () => {
    const likes = 0;
    const dislikes = -10;
    const result = calcProgress(likes, dislikes);
    expect(result).toBe(-0); // mdr...
});

test('returns correct progress percentage when likes is a negative number and dislikes is 0', () => {
    const likes = -10;
    const dislikes = 0;
    const result = calcProgress(likes, dislikes);
    expect(result).toBe(100); // - / - = +
});

test('returns correct progress percentage when likes and dislikes are negative numbers', () => {
    const likes = -10;
    const dislikes = -5;
    const result = calcProgress(likes, dislikes);
    expect(result).toBe(66);
});
