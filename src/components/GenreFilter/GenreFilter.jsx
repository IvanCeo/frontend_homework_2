import styles from './GenreFilter.module.css';

const GenreFilter = ({ genres, activeGenre, onGenreSelect }) => {
  return (
    <div className={styles.genreFilter}>
      {genres.map(genre => (
        <button
          key={genre}
          className={`${styles.genreButton} ${activeGenre === genre ? styles.active : ''}`}
          onClick={() => onGenreSelect(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;