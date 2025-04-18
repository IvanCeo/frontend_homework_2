import styles from './MovieCard.module.css';

const MovieCard = ({ title, genre, duration, image }) => {
  return (
    <div className={styles.movieCard}>
      <div className={styles.imageContainer}>
        <img 
          src={image} 
          alt={title}
          className={styles.movieImage}
          onError={(e) => {
            e.target.src = 'https://i.ebayimg.com/images/g/TtIAAOSwBDZmH9ix/s-l1600.png'; // Запасное изображение
            e.target.alt = 'Изображение не найдено :('
          }}
        />
      </div>
      <h3 className={styles.movieTitle}>{title}</h3>
      <div className={styles.movieDetails}>
        <span className={styles.movieGenre}>{genre}</span>
        <span className={styles.movieDuration}>{duration}</span>
      </div>
    </div>
  );
};

export default MovieCard;