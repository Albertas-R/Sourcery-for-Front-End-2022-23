import React from 'react';
import PromoSection from './PromoSection';
import AcademiesSection from './AcademiesSection';

const Home = () => {
  document.documentElement.setAttribute('data-theme', 'blue');

  return (
    <>
      <PromoSection />
      <AcademiesSection />
    </>
  );
};

export default Home;
