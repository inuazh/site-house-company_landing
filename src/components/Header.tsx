import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header: React.FC = () => {
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
    </header>
  );
};

export default Header;
