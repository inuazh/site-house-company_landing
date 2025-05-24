import React from 'react';
import styles from './Services.module.css';

interface ServiceItem {
  title: string;
  description: string;
  details?: string;
  note?: string;
  imageUrl: string;
}

const servicesData: ServiceItem[] = [
  {
    title: 'Строительство домов',
    description: 'Проектирование, возведение и отделка под ключ.',
    details: 'Мы реализуем проекты любой сложности: от уютных коттеджей до современных вилл. Используем только проверенные материалы и современные технологии.',
    note: 'Ваша мечта о собственном доме — в надёжных руках.',
    imageUrl: '/images/services/building.jpg',
  },
  {
    title: 'Умные системы',
    description: 'Интегрируем IoT-технологии, системы безопасности, автоматизацию.',
    details: 'Автоматизация освещения, климат-контроль, видеонаблюдение и многое другое — всё для вашего комфорта и безопасности.',
    note: 'Управляйте домом с любого устройства, где бы вы ни находились.',
    imageUrl: '/images/services/smart.jpg',
  },
  {
    title: 'Ландшафтные работы',
    description: 'Полный комплекс по благоустройству территории.',
    details: 'Дизайн, озеленение, устройство дорожек, установка систем автополива и освещения. Ваш участок станет настоящим оазисом.',
    note: 'Красота и функциональность — в каждом уголке вашего двора.',
    imageUrl: '/images/services/landscape.jpg',
  },
  {
    title: 'Дизайн интерьера',
    description: 'Современные решения для уюта и стиля вашего дома.',
    details: 'Создаём уникальные интерьеры, учитывая ваши пожелания и современные тренды. Работаем с лучшими дизайнерами.',
    note: 'Вдохновляющее пространство для жизни и творчества.',
    imageUrl: '/images/services/interior.jpg',
  },
  {
    title: 'Энергоэффективность',
    description: 'Внедрение технологий для экономии ресурсов и заботы об экологии.',
    details: 'Солнечные панели, теплоизоляция, системы рекуперации — всё для снижения расходов и заботы о природе.',
    note: 'Экономьте ресурсы — заботьтесь о будущем.',
    imageUrl: '/images/services/eco.jpg',
  },
  {
    title: 'Сервис и поддержка',
    description: 'Гарантийное и постгарантийное обслуживание, консультации.',
    details: 'Мы всегда на связи: регулярное обслуживание, быстрый выезд специалистов, индивидуальные консультации.',
    note: 'Ваш дом — под нашей защитой.',
    imageUrl: '/images/services/support.jpg',
  },
];

const Services: React.FC = () => {
  return (
    <section className={styles.services}>
      <h2 className={styles.title}>Наши услуги</h2>
      <p className={styles.servicesIntro}>
        Мы предлагаем комплексные решения для создания дома вашей мечты. <br />
        <strong>От идеи до воплощения — мы сопровождаем вас на каждом этапе.</strong>
      </p>
      <div className={styles.grid}>
        {servicesData.map((service, index) => (
          <div key={index} className={styles.card} style={{animationDelay: `${index * 0.07}s`}}>
            <img
              src={service.imageUrl}
              alt={service.title}
              className={styles.cardImage}
              loading="lazy"
            />
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDesc}>{service.description}</p>
            {service.details && <p className={styles.cardDetails}>{service.details}</p>}
            {service.note && <div className={styles.cardNote}><em>{service.note}</em></div>}
          </div>
        ))}
      </div>
      <div className={styles.servicesExtra}>
        <h3>Почему выбирают нас?</h3>
        <ul>
          <li>Более 15 лет опыта и сотни довольных клиентов.</li>
          <li>Индивидуальный подход к каждому проекту.</li>
          <li>Гарантия качества и прозрачные условия сотрудничества.</li>
          <li>Собственная команда архитекторов, инженеров и дизайнеров.</li>
          <li>Сопровождение на всех этапах — от консультации до постгарантийного обслуживания.</li>
        </ul>
        <blockquote className={styles.servicesQuote}>
          «Мы строим не просто дома — мы создаём пространство для счастливой жизни.»
        </blockquote>
      </div>
    </section>
  );
};

export default Services;
