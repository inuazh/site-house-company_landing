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
        <source src="../../public/videos/house.mp4" type="video/mp4" />
        Ваш браузер не поддерживает воспроизведение видео.
      </video>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>Строим по новым правилам</h1>
        <p>Непревзойдённое качество, умные решения для вашего дома</p>
        <button className={styles.button}>Узнать больше</button>
      </div>
    </section>
  );
};

export default Hero;
