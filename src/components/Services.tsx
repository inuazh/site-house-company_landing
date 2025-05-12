import React from 'react';
import styles from './Services.module.css';

interface ServiceItem {
  title: string;
  description: string;
}

const servicesData: ServiceItem[] = [
  {
    title: 'Строительство домов',
    description: 'Проектирование, возведение и отделка под ключ.',
  },
  {
    title: 'Умные системы',
    description: 'Интегрируем IoT-технологии, системы безопасности, автоматизацию.',
  },
  {
    title: 'Ландшафтные работы',
    description: 'Полный комплекс по благоустройству территории.',
  },
  {
    title: 'Дизайн интерьера',
    description: 'Современные решения для уюта и стиля вашего дома.',
  },
  {
    title: 'Энергоэффективность',
    description: 'Внедрение технологий для экономии ресурсов и заботы об экологии.',
  },
  {
    title: 'Сервис и поддержка',
    description: 'Гарантийное и постгарантийное обслуживание, консультации.',
  },
];

const Services: React.FC = () => {
  return (
    <section className={styles.services}>
      <h2 className={styles.title}>Наши услуги</h2>
      <div className={styles.grid}>
        {servicesData.map((service, index) => (
          <div key={index} className={styles.card} style={{animationDelay: `${index * 0.07}s`}}>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDesc}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
