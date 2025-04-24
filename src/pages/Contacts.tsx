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
          </form>
          <div className={styles.contactInfo}>
            <h2>Наши контакты</h2>
            <p>Телефон: +7 (495) 123-45-67</p>
            <p>Email: info@samyyumndom.ru</p>
            <p>Адрес: Москва, ул. Примерная, д. 1</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
