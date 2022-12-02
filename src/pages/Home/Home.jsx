import React from 'react';
import PropTypes from 'prop-types';
import PromoSection from './PromoSection';
import AcademiesSection from './AcademiesSection';

const Home = () => {
  return (
    <>
      <PromoSection />
      <PromoSection theme={'red-theme'} />
      <AcademiesSection />
      <AcademiesSection theme={'green-theme'} />
    </>
  );
};

Home.propTypes = {
  theme: PropTypes.string,
};

export default Home;
