import React from 'react';
import styles from './ServicesPage.module.css';

interface ServiceItem {
  title: string;
  description: string;
  details?: string;
  note?: string;
}

const servicesData: ServiceItem[] = [
  {
    title: 'Строительство домов',
    description: 'Проектирование, возведение и отделка под ключ с использованием современных технологий и материалов.',
    details: 'Мы реализуем проекты любой сложности: от уютных коттеджей до современных вилл. Используем только проверенные материалы и современные технологии.',
    note: 'Ваша мечта о собственном доме — в надёжных руках.',
  },
  {
    title: 'Умные системы',
    description: 'Интеграция IoT-решений, систем безопасности и автоматизации для создания безопасного и комфортного жилья.',
    details: 'Автоматизация освещения, климат-контроль, видеонаблюдение и многое другое — всё для вашего комфорта и безопасности.',
    note: 'Управляйте домом с любого устройства, где бы вы ни находились.',
  },
  {
    title: 'Ландшафтные работы',
    description: 'Полный комплекс благоустройства территории, включая дизайн, озеленение и установка систем полива.',
    details: 'Дизайн, озеленение, устройство дорожек, установка систем автополива и освещения. Ваш участок станет настоящим оазисом.',
    note: 'Красота и функциональность — в каждом уголке вашего двора.',
  },
  {
    title: 'Дизайн интерьера',
    description: 'Разработка уникальных интерьеров с учетом ваших пожеланий и современных трендов.',
    details: 'Создаём уникальные интерьеры, учитывая ваши пожелания и современные тренды. Работаем с лучшими дизайнерами.',
    note: 'Вдохновляющее пространство для жизни и творчества.',
  },
  {
    title: 'Энергоэффективные решения',
    description: 'Внедрение систем энергосбережения, солнечных панелей и экологичных материалов.',
    details: 'Солнечные панели, теплоизоляция, системы рекуперации — всё для снижения расходов и заботы о природе.',
    note: 'Экономьте ресурсы — заботьтесь о будущем.',
  },
  {
    title: 'Сервис и поддержка',
    description: 'Профессиональное обслуживание, консультации и сопровождение на всех этапах.',
    details: 'Мы всегда на связи: регулярное обслуживание, быстрый выезд специалистов, индивидуальные консультации.',
    note: 'Ваш дом — под нашей защитой.',
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
        <div className={styles.servicesIntro}>
          <strong>Каждый этап — под контролем профессионалов.</strong> <br />
          Мы не просто строим дома, мы создаём пространство для жизни, отдыха и вдохновения. <br />
          <em>Доверьтесь нашему опыту — и ваш дом станет воплощением мечты.</em>
        </div>
        <div className={styles.grid}>
          {servicesData.map((service, index) => (
            <div key={index} className={styles.card} style={{animationDelay: `${index * 0.08}s`}}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
              {service.details && <p className={styles.cardDetails}>{service.details}</p>}
              {service.note && <div className={styles.cardNote}><em>{service.note}</em></div>}
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
          <blockquote className={styles.servicesQuote}>
            «Мы строим не просто дома — мы создаём пространство для счастливой жизни.»
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
