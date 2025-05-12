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
  {
    title: 'Дизайн интерьера',
    description: 'Разработка уникальных интерьеров с учетом ваших пожеланий и современных трендов.',
  },
  {
    title: 'Энергоэффективные решения',
    description: 'Внедрение систем энергосбережения, солнечных панелей и экологичных материалов.',
  },
  {
    title: 'Сервис и поддержка',
    description: 'Профессиональное обслуживание, консультации и сопровождение на всех этапах.',
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
            <div key={index} className={styles.card} style={{animationDelay: `${index * 0.08}s`}}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.extraSection}>
          <h2>Почему выбирают нас?</h2>
          <ul>
            <li>Опыт более 15 лет в строительстве и инновациях</li>
            <li>Гарантия качества и прозрачные условия</li>
            <li>Индивидуальный подход к каждому клиенту</li>
            <li>Собственная команда архитекторов и инженеров</li>
            <li>Сопровождение проекта на всех этапах</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
