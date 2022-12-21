import React, { useEffect, useState } from 'react';
import useTheme from '../../hooks/useTheme';
import PromoSection from './PromoSection';
import AcademiesSection from './AcademiesSection';
import useFetch from '~/hooks/useFetch';
import TestimonialsSection from '~/components/TestimonialsSection';

const Home = () => {
  useTheme();
  const testimonials = useFetch('https://www.jurele.lt/testimonials.json');

  return (
    <>
      <PromoSection />
      <AcademiesSection />
      <TestimonialsSection
        testimonials={testimonials}
        academy={'Sourcery for Front-End Graduate'}
      />
    </>
  );
};

export default Home;
