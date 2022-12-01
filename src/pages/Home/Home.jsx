import React from 'react';
import PropTypes from 'prop-types';
import PromoSection from './PromoSection';
import AcademiesSection from './AcademiesSection';

// $themes:
//   'violetTheme'
//   'blueTheme'
//   'greenTheme'
//   'redTheme'

const Home = () => {
  return (
    <>
      <PromoSection />
      <PromoSection theme={'redTheme'} />
      <AcademiesSection />
      <AcademiesSection theme={'greenTheme'} />
    </>
  );
};

Home.propTypes = {
  theme: PropTypes.string,
};

export default Home;
