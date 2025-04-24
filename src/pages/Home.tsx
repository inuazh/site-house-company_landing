import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      {/* Здесь можно добавить дополнительные блоки: отзывы, галерею проектов, форму обратной связи и т.д. */}
    </>
  );
};

export default Home;
