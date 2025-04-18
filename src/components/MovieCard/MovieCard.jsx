import styles from './MovieCard.module.css';

const MovieCard = ({ title, genre, duration }) => {
  return (
    <div className={styles.movieCard}>
      <h3 className={styles.movieTitle}>{title}</h3>
      <div className={styles.movieDetails}>
        <span className={styles.movieGenre}>{genre}</span>
        <span className={styles.movieDuration}>{duration}</span>
      </div>
    </div>
  );
};

export default MovieCard;