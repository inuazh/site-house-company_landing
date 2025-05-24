import React, { useState } from 'react';
import styles from './Contacts.module.css';

const Contacts: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь можно добавить отправку данных на сервер
    console.log('Отправка данных формы:', formData);
    alert('Спасибо за ваше сообщение!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className={styles.contacts}>
      <div className={styles.container}>
        <h1 className={styles.title}>Контакты</h1>
        <p className={styles.description}>
          Если у вас есть вопросы или вы хотите обсудить проект, свяжитесь с нами удобным способом.
        </p>
        <div className={styles.contactsIntro}>
          <strong>Мы всегда открыты для общения!</strong> <br />
          Оставьте заявку через форму или воспользуйтесь контактами ниже — мы ответим на все ваши вопросы и поможем воплотить мечту о собственном доме.
        </div>
        <div className={styles.content}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Ваше имя</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Сообщение</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className={styles.button}>Отправить</button>
            <div className={styles.formNote}>
              <small>
                <em>Мы гарантируем конфиденциальность ваших данных и оперативную обратную связь.</em>
              </small>
            </div>
          </form>
          <div className={styles.contactInfo}>
            <h2>Наши контакты</h2>
            <p>Телефон: +7 (495) 123-45-67</p>
            <p>Email: info@samyyumndom.ru</p>
            <p>Адрес: Москва, ул. Примерная, д. 1</p>
            <div className={styles.contactNote}>
              <em>Звоните или пишите — мы всегда рады новым знакомствам и интересным проектам!</em>
            </div>
          </div>
        </div>
        <div className={styles.contactsExtra}>
          <h3>Часто задаваемые вопросы</h3>
          <p><strong>— Как быстро вы отвечаете на заявки?</strong> <br /> Обычно мы связываемся с клиентом в течение 1 рабочего дня.</p>
          <p><strong>— Можно ли приехать в офис?</strong> <br /> Конечно! Позвоните нам, чтобы договориться о встрече.</p>
          <p><strong>— С какими регионами работаете?</strong> <br /> Мы реализуем проекты по всей России.</p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
