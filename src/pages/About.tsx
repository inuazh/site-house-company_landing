import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h1 className={styles.title}>О компании</h1>
        <p className={styles.description}>
          ООО ЗСК «САМЫЙ УМНЫЙ ДОМ» — команда профессионалов, объединённых одной целью: создавать современные, надёжные и комфортные дома для жизни.
        </p>
        <div className={styles.aboutIntro}>
          <strong>Мы строим не просто здания — мы создаём пространство для жизни, вдохновения и развития.</strong> <br />
          Более 15 лет мы воплощаем мечты наших клиентов в реальность, используя инновационные технологии и индивидуальный подход к каждому проекту. <br />
          <em>Наша миссия — сделать ваш дом местом, куда хочется возвращаться снова и снова.</em>
        </div>
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
        <blockquote className={styles.aboutQuote}>
          «Доверяя нам строительство своего дома, вы выбираете качество, надёжность и заботу о каждой детали.»
        </blockquote>
        <div className={styles.aboutExtra}>
          <h3>Наши ценности</h3>
          <p>— Профессионализм и ответственность на каждом этапе работы.</p>
          <p>— Открытость и честность в отношениях с клиентами.</p>
          <p>— Постоянное развитие и внедрение новых технологий.</p>
          <p>— Забота о комфорте и безопасности будущих жильцов.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
