import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { useTheme } from '../theme/ThemeProvider';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [navOpen, setNavOpen] = useState(false);

  // Закрывать меню при переходе по ссылке
  const handleNavClick = () => setNavOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>САМЫЙ УМНЫЙ ДОМ</div>
      <button
        className={styles.burger}
        aria-label="Открыть меню"
        aria-expanded={navOpen}
        aria-controls="main-nav"
        onClick={() => setNavOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav
        id="main-nav"
        className={`${styles.nav} ${navOpen ? styles.open : ''}`}
        onClick={handleNavClick}
      >
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
