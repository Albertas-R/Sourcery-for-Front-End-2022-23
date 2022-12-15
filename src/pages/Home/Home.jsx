import React, { useEffect, useState } from 'react';
import useTheme from '../../hooks/useTheme';
import PromoSection from './PromoSection';
import AcademiesSection from './AcademiesSection';
import TestimonialCard from '~/pages/Home/TestimonialCard';
import { useTestimonialData } from '~/hooks/useTestimonialData';
import TestimonialModal from '~/pages/Home/TestimonialCard/TestimonialModal';

const Home = () => {
  useTheme();
  const testimonialData = useTestimonialData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'unset';
  }, [isModalOpen]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <PromoSection />
      <AcademiesSection />
      {testimonialData.length > 0 && (
        <>
          <TestimonialCard
            photo={testimonialData[0].photo}
            // TODO: This is to only simulate what happens when message too long. Remove after testing
            message={testimonialData[0].message.repeat(4)}
            name={testimonialData[0].name}
            academy={testimonialData[0].academy}
            openModal={handleOpenModal}
          />
          {isModalOpen && (
            <TestimonialModal
              photo={testimonialData[0].photo}
              // TODO: This is to only simulate what happens when message too long. Remove after testing
              message={testimonialData[0].message.repeat(4)}
              name={testimonialData[0].name}
              academy={testimonialData[0].academy}
              closeModal={handleCloseModal}
            />
          )}
        </>
      )}
    </>
  );
};

export default Home;
