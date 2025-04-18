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
      duration: '136 мин.',
      image: '/images/matrix.webp' 
    },
    {
      id: 2,
      title: 'Отступники',
      genre: 'Триллер',
      duration: '151 мин.',
      image: '/images/outers.webp'
    },
    {
      id: 3,
      title: 'Безумный Макс',
      genre: 'Боевик',
      duration: '88 мин.',
      image: '/images/mad_max.webp'
    },
    {
      id: 4,
      title: 'Джентельмены',
      genre: 'Драма',
      duration: '113 мин.',
      image: '/images/jentle.webp'
    },
    {
      id: 5,
      title: 'Гладиатор',
      genre: 'Боевик',
      duration: '155 мин.',
      image: '/images/gladiator.webp'
    },
    {
      id: 6,
      title: 'Однажды в Голливуде',
      genre: 'Драма',
      duration: '161 мин.',
      image: '/images/holiwood.webp'
    },
    {
      id: 7,
      title: 'Предложение',
      genre: 'Комедия',
      duration: '108 мин.',
      image: '/images/proposal.webp'
    },
    {
      id: 8,
      title: 'Малышка на миллион',
      genre: 'Драма',
      duration: '132 мин.',
      image: '/images/baby_billion.webp'
    },
    {
      id: 9,
      title: 'Ларри Краун',
      genre: 'Комедия',
      duration: '98 мин.',
      image: '/images/larry.webp'
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
              image={movie.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;