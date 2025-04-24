import React from 'react';
import styles from './ServicesPage.module.css';

interface ServiceItem {
  title: string;
  description: string;
}

const servicesData: ServiceItem[] = [
  {
    title: 'Строительство домов',
    description: 'Проектирование, возведение и отделка под ключ с использованием современных технологий и материалов.',
  },
  {
    title: 'Умные системы',
    description: 'Интеграция IoT-решений, систем безопасности и автоматизации для создания безопасного и комфортного жилья.',
  },
  {
    title: 'Ландшафтные работы',
    description: 'Полный комплекс благоустройства территории, включая дизайн, озеленение и установка систем полива.',
  },
];

const ServicesPage: React.FC = () => {
  return (
    <section className={styles.servicesPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>Наши Услуги</h1>
        <p className={styles.description}>
          Мы предлагаем широкий спектр услуг, направленных на создание качественного и современного жилья. Ознакомьтесь с нашим предложением.
        </p>
        <div className={styles.grid}>
          {servicesData.map((service, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
