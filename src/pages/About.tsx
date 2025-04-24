import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h1 className={styles.title}>О компании</h1>
        <p className={styles.description}>
          ООО «ЗЕМЕЛЬНО-СТРОИТЕЛЬНАЯ КОМПАНИЯ "САМЫЙ УМНЫЙ ДОМ"» — это команда профессионалов с многолетним опытом в строительстве и проектировании домов. Мы предлагаем комплексные решения, включающие не только возведение зданий, но и интеграцию современных технологий для создания комфортного и безопасного жилья.
        </p>
        <div className={styles.content}>
          <img 
            src="https://img.dmclk.ru/s2160x3840q80/suburban/78/d3/78d3a7941f9b4cb2a058af766a308d2d9214f7a9.webp" 
            alt="О компании" 
            className={styles.image} 
          />
          <div className={styles.textBlock}>
            <h2>Наша миссия</h2>
            <p>
              Мы стремимся создавать дома, которые отвечают всем современным требованиям, используя инновационные технологии и передовые материалы. Наш приоритет — качество, надежность и комфорт наших клиентов.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
