import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';


test('renders the app with the correct title', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText('Liste des films')).toBeInTheDocument();
});


test('renders the title and Movies component', () => {
  render(<Provider store={store}><App /></Provider>);

  const titleElement = screen.getByText('Liste des films');
  expect(titleElement).toBeInTheDocument();

  const moviesComponent = screen.getByTestId('movies-component');
  expect(moviesComponent).toBeInTheDocument();
});
