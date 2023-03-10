import React, { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import useTheme from '~/hooks/useTheme';
import useBreakpointKey from '~/hooks/useBreakpointKey';
import { useTestimonialsData } from '~/context/TestimonialsFetchContext.js';
import BackgroundParticles from '~/assets/images/Background_particles_Testimonials.svg';
import TestimonialsCarousel from '~/components/TestimonialsSection/TestimonialsCarousel';
import TestimonialModal from '~/components/TestimonialsSection/TestimonialModal';
import TestimonialCards from '~/components/TestimonialsSection/TestimonialCards';
import styles from './TestimonialsSection.module.scss';
import { ACADEMIES } from '~/constants/constants';
import LoadingSpinner from '../LoadingSpinner';

const cn = classNames.bind(styles);

const MAX_NUMBER_OF_TESTIMONIALS_TO_DISPLAY = 10;
const NUMBER_OF_TESTIMONIALS_TO_DISPLAY = {
  'mobile-only': 1,
  'tablet-portrait': 1,
  'tablet-landscape': 2,
  desktop: 3,
  'big-desktop': 3,
  'big-desktop-up': 3,
};

const TestimonialsSection = ({ academy }) => {
  useTheme();
  const dataFetchContext = useTestimonialsData();
  const breakpointKey = useBreakpointKey();
  const testimonialsData = dataFetchContext.testimonialData;
  const isLoading = dataFetchContext.testimonialsAreLoading;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [
    numberOfTestimonialsToDisplay,
    setNumberOfTestimonialsToDisplay,
  ] = useState(3);

  const testimonials = useMemo(() => {
    switch (academy) {
      case ACADEMIES.developers:
        return testimonialsData.filter(
          (item) => item.academy === 'Sourcery for Developers Graduate'
        );
      case ACADEMIES.testers:
        return testimonialsData.filter(
          (item) => item.academy === 'Sourcery for Testers Graduate'
        );
      case ACADEMIES.frontend:
        return testimonialsData.filter(
          (item) => item.academy === 'Sourcery for Front-End Graduate'
        );
      default:
        return testimonialsData;
    }
  }, [testimonialsData]);

  const firstXAcademyTestimonials = testimonials.slice(
    0,
    MAX_NUMBER_OF_TESTIMONIALS_TO_DISPLAY
  );

  useEffect(() => {
    setNumberOfTestimonialsToDisplay(
      Math.min(
        NUMBER_OF_TESTIMONIALS_TO_DISPLAY[breakpointKey],
        MAX_NUMBER_OF_TESTIMONIALS_TO_DISPLAY
      )
    );
  }, [breakpointKey]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isModalOpen]);

  const handleOpenModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (!testimonials.length) {
    return null;
  }

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <section className={cn('testimonials-section')}>
          <h2 className={cn('testimonials-section__heading')}>Testimonials</h2>
          {firstXAcademyTestimonials.length > numberOfTestimonialsToDisplay ? (
            <TestimonialsCarousel
              testimonials={firstXAcademyTestimonials}
              numberOfTestimonialsToDisplay={numberOfTestimonialsToDisplay}
              handleOpenModal={handleOpenModal}
            />
          ) : (
            <TestimonialCards
              testimonials={firstXAcademyTestimonials}
              handleOpenModal={handleOpenModal}
            />
          )}
          {isModalOpen && selectedTestimonial && (
            <TestimonialModal
              photo={selectedTestimonial.photo}
              message={selectedTestimonial.message}
              name={selectedTestimonial.name}
              academy={selectedTestimonial.academy}
              closeModal={handleCloseModal}
            />
          )}
          <BackgroundParticles aria-hidden="true" />
        </section>
      )}
      <AnimatePresence initial="false" mode={'wait'}>
        {isModalOpen && selectedTestimonial && (
          <TestimonialModal
            photo={selectedTestimonial.photo}
            message={selectedTestimonial.message}
            name={selectedTestimonial.name}
            academy={selectedTestimonial.academy}
            closeModal={handleCloseModal}
          />
        )}
      </AnimatePresence>
      <BackgroundParticles aria-hidden="true" />
    </>
  );
};

TestimonialsSection.propTypes = {
  academy: PropTypes.oneOf(Object.values(ACADEMIES)),
};

export default TestimonialsSection;
