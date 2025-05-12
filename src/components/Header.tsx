import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { useTheme } from '../theme/ThemeProvider';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className={styles.header}>
      <div className={styles.logo}>САМЫЙ УМНЫЙ ДОМ</div>
      <nav className={styles.nav}>
        <Link className={styles.navItem} to="/">Главная</Link>
        <Link className={styles.navItem} to="/about">О компании</Link>
        <Link className={styles.navItem} to="/services">Услуги</Link>
        <Link className={styles.navItem} to="/projects">Проекты</Link>
        <Link className={styles.navItem} to="/contacts">Контакты</Link>
      </nav>
      <button
        className={styles.themeToggle}
        onClick={toggleTheme}
        aria-label="Переключить тему"
        title="Переключить тему"
      >
        {theme === 'dark' ? '🌙' : '☀️'}
      </button>
    </header>
  );
};

export default Header;
