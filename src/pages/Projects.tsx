import React from 'react';
import styles from './Projects.module.css';

interface ProjectItem {
  title: string;
  imageUrl: string;
  description: string;
  status: 'done' | 'in-progress';
}

const projectsData: ProjectItem[] = [
  {
    title: 'Современный коттедж',
    imageUrl: 'https://img.dmclk.ru/s2160x3840q80/suburban/78/d3/78d3a7941f9b4cb2a058af766a308d2d9214f7a9.webp',
    description: 'Стильный коттедж с минималистичным дизайном и внедрением умных систем.',
    status: 'done',
  },
  {
    title: 'Экологичный дом',
    imageUrl: 'https://img.dmclk.ru/s2160x3840q80/suburban/78/d3/78d3a7941f9b4cb2a058af766a308d2d9214f7a9.webp',
    description: 'Дом, построенный с учетом энергоэффективности и минимального воздействия на окружающую среду.',
    status: 'done',
  },
  {
    title: 'Комфортная усадьба',
    imageUrl: 'https://img.dmclk.ru/s2160x3840q80/suburban/78/d3/78d3a7941f9b4cb2a058af766a308d2d9214f7a9.webp',
    description: 'Просторная усадьба с живописным ландшафтом и современной архитектурой.',
    status: 'done',
  },
  {
    title: 'Городской таунхаус',
    imageUrl: 'https://img.dmclk.ru/s2160x3840q80/suburban/78/d3/78d3a7941f9b4cb2a058af766a308d2d9214f7a9.webp',
    description: 'Компактный и функциональный дом для городской семьи с умной системой управления.',
    status: 'in-progress',
  },
  {
    title: 'Вилла у озера',
    imageUrl: 'https://img.dmclk.ru/s2160x3840q80/suburban/78/d3/78d3a7941f9b4cb2a058af766a308d2d9214f7a9.webp',
    description: 'Роскошная вилла с панорамными окнами и террасой для отдыха на природе.',
    status: 'in-progress',
  },
  {
    title: 'Эко-лофт',
    imageUrl: 'https://img.dmclk.ru/s2160x3840q80/suburban/78/d3/78d3a7941f9b4cb2a058af766a308d2d9214f7a9.webp',
    description: 'Современный лофт с использованием натуральных материалов и энергосберегающих технологий.',
    status: 'in-progress',
  },
];

const doneProjects = projectsData.filter((p) => p.status === 'done');
const inProgressProjects = projectsData.filter((p) => p.status === 'in-progress');

const statusLabel = {
  done: 'Завершён',
  'in-progress': 'В реализации',
};

const Projects: React.FC = () => {
  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <h1 className={styles.title}>Проекты</h1>
        <p className={styles.description}>
          Ознакомьтесь с нашими реализованными и текущими проектами. Каждый проект — это уникальное сочетание современных технологий, дизайна и заботы о клиентах.
        </p>
        <div className={styles.projectsIntro}>
          <strong>Мы гордимся каждым реализованным объектом.</strong> <br />
          Наши проекты — это результат тесного сотрудничества с клиентами, внимания к деталям и стремления к совершенству. <br />
          <em>Вдохновляйтесь примерами и присоединяйтесь к числу довольных владельцев современных домов!</em>
        </div>
        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>Исполненные проекты</h2>
          <div className={styles.grid}>
            {doneProjects.map((project, index) => (
              <div key={index} className={styles.card} style={{animationDelay: `${index * 0.09}s`}}>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className={styles.cardImage}
                />
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <span className={styles.status + ' ' + styles.statusDone}>{statusLabel[project.status]}</span>
                  <p className={styles.cardDesc}>{project.description}</p>
                  <div className={styles.cardNote}>
                    <em>Проект сдан в срок и полностью соответствует ожиданиям клиента.</em>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>Проекты в реализации</h2>
          <div className={styles.grid}>
            {inProgressProjects.map((project, index) => (
              <div key={index} className={styles.card} style={{animationDelay: `${index * 0.09}s`}}>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className={styles.cardImage}
                />
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <span className={styles.status + ' ' + styles.statusInProgress}>{statusLabel[project.status]}</span>
                  <p className={styles.cardDesc}>{project.description}</p>
                  <div className={styles.cardNote}>
                    <em>Следите за ходом строительства — скоро здесь появится новый современный дом!</em>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.extraSection}>
          <h2>Этапы реализации проекта</h2>
          <ol>
            <li>Консультация и анализ потребностей клиента</li>
            <li>Разработка индивидуального проекта</li>
            <li>Строительство и внедрение умных систем</li>
            <li>Финальный контроль качества и сдача объекта</li>
          </ol>
          <blockquote className={styles.projectsQuote}>
            «Мы сопровождаем клиента на каждом этапе — от идеи до новоселья!"
          </blockquote>
        </div>
        <div className={styles.projectsExtra}>
          <h3>Отзывы наших клиентов</h3>
          <p>
            <strong>Ирина К.:</strong> «Спасибо за профессионализм и внимание к деталям! Наш дом превзошёл все ожидания.»
          </p>
          <p>
            <strong>Александр П.:</strong> «Команда всегда была на связи, все этапы были прозрачны и понятны. Рекомендую!"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
