import React from 'react';
import './App.css';
import "react-sweet-progress/lib/style.css";
import { Movies } from './features/movies/Movies';

function App() {
  return (
    <div className="App">
      <h2 data-testid="title">Liste des films</h2>
      <Movies />
    </div>
  );
}

export default App;
