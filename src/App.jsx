import { useState } from 'react';
import Header from './components/Header/Header';
import GenreFilter from './components/GenreFilter/GenreFilter';
import MovieCard from './components/MovieCard/MovieCard';
import './App.css';

const App = () => {
  const [activeGenre, setActiveGenre] = useState('Все фильмы');
  
  const movies = [
    {
      id: 1,
      title: 'Матрица',
      genre: 'Боевик',
      duration: '136 мин.'
    },
    {
      id: 2,
      title: 'Отступники',
      genre: 'Триллер',
      duration: '151 мин.'
    },
    {
      id: 3,
      title: 'Безумный Макс',
      genre: 'Боевик',
      duration: '88 мин.'
    },
    {
      id: 4,
      title: 'Джентельмены',
      genre: 'Драма',
      duration: '113 мин.'
    },
    {
      id: 5,
      title: 'Гладиатор',
      genre: 'Боевик',
      duration: '155 мин.'
    },
    {
      id: 6,
      title: 'Однажды в Голливуде',
      genre: 'Драма',
      duration: '161 мин.'
    }
  ];

  const genres = ['Все фильмы', 'Боевик', 'Триллер', 'Комедия', 'Драма'];

  const filteredMovies = activeGenre === 'Все фильмы' 
    ? movies 
    : movies.filter(movie => movie.genre === activeGenre);

  return (
    <div className="app">
      <Header />
      <GenreFilter 
        genres={genres} 
        activeGenre={activeGenre}
        onGenreSelect={setActiveGenre}
      />
      <div className="movies-container">
        <h2>Фильмы</h2>
        <div className="movies-grid">
          {filteredMovies.map(movie => (
            <MovieCard 
              key={movie.id}
              title={movie.title}
              genre={movie.genre}
              duration={movie.duration}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;