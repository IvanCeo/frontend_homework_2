import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <button className={styles.navButton}>Все фильмы</button>
        <button className={styles.navButton}>Избранное</button>
        <button className={styles.navButton}>Добавить фильм</button>
      </nav>
    </header>
  );
};

export default Header;