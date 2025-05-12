import React from 'react';
import styles from './Projects.module.css';

interface ProjectItem {
  title: string;
  imageUrl: string;
  description: string;
}

const projectsData: ProjectItem[] = [
  {
    title: 'Современный коттедж',
    imageUrl: 'https://img.dmclk.ru/s2160x3840q80/suburban/78/d3/78d3a7941f9b4cb2a058af766a308d2d9214f7a9.webp',
    description: 'Стильный коттедж с минималистичным дизайном и внедрением умных систем.',
  },
  {
    title: 'Экологичный дом',
    imageUrl: 'https://img.dmclk.ru/s2160x3840q80/suburban/78/d3/78d3a7941f9b4cb2a058af766a308d2d9214f7a9.webp',
    description: 'Дом, построенный с учетом энергоэффективности и минимального воздействия на окружающую среду.',
  },
  {
    title: 'Комфортная усадьба',
    imageUrl: 'https://img.dmclk.ru/s2160x3840q80/suburban/78/d3/78d3a7941f9b4cb2a058af766a308d2d9214f7a9.webp',
    description: 'Просторная усадьба с живописным ландшафтом и современной архитектурой.',
  },
  {
    title: 'Городской таунхаус',
    imageUrl: 'https://img.dmclk.ru/s2160x3840q80/suburban/78/d3/78d3a7941f9b4cb2a058af766a308d2d9214f7a9.webp',
    description: 'Компактный и функциональный дом для городской семьи с умной системой управления.',
  },
  {
    title: 'Вилла у озера',
    imageUrl: 'https://img.dmclk.ru/s2160x3840q80/suburban/78/d3/78d3a7941f9b4cb2a058af766a308d2d9214f7a9.webp',
    description: 'Роскошная вилла с панорамными окнами и террасой для отдыха на природе.',
  },
  {
    title: 'Эко-лофт',
    imageUrl: 'https://img.dmclk.ru/s2160x3840q80/suburban/78/d3/78d3a7941f9b4cb2a058af766a308d2d9214f7a9.webp',
    description: 'Современный лофт с использованием натуральных материалов и энергосберегающих технологий.',
  },
];

const Projects: React.FC = () => {
  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <h1 className={styles.title}>Наши Проекты</h1>
        <p className={styles.description}>
          Ознакомьтесь с нашими реализованными проектами, демонстрирующими качество и инновации. Каждый проект — это уникальное сочетание современных технологий, дизайна и заботы о клиентах.
        </p>
        <div className={styles.grid}>
          {projectsData.map((project, index) => (
            <div key={index} className={styles.card} style={{animationDelay: `${index * 0.09}s`}}>
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className={styles.cardImage}
              />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.extraSection}>
          <h2>Этапы реализации проекта</h2>
          <ol>
            <li>Консультация и анализ потребностей клиента</li>
            <li>Разработка индивидуального проекта</li>
            <li>Строительство и внедрение умных систем</li>
            <li>Финальный контроль качества и сдача объекта</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Projects;
