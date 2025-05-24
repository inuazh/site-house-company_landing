import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <video
        className={styles.videoBackground}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={`${import.meta.env.BASE_URL}videos/house.mp4`} type="video/mp4" />
        Ваш браузер не поддерживает воспроизведение видео.
      </video>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.heading}>Строим по новым правилам</h1>
        <p className={styles.subheading}>Непревзойдённое качество, умные решения для вашего дома</p>
        <p className={styles.heroExtra}>
          Мы воплощаем в жизнь самые смелые архитектурные идеи, сочетая инновационные технологии и заботу о комфорте. <br />
          <strong>Каждый проект — это отражение индивидуальности клиента и современного подхода к строительству.</strong>
        </p>
        <div className={styles.features}>
          <span>✔ Умные системы</span>
          <span>✔ Энергоэффективность</span>
          <span>✔ Индивидуальный подход</span>
        </div>
        <blockquote className={styles.heroQuote}>
          «Дом — это не просто стены и крыша. Это место, где рождаются мечты и создаётся будущее.»
        </blockquote>
        <button className={styles.button}>Узнать больше</button>
        <div className={styles.heroNote}>
          <small>
            <em>Уже более 15 лет мы строим дома, которые становятся настоящей гордостью для своих владельцев.</em>
          </small>
        </div>
      </div>
    </section>
  );
};

export default Hero;
