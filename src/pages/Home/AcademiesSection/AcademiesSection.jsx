import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import backgroundParticles from '~/assets/images/Background_particles_Academies.svg?url';
import ArrowButton from '~/assets/icons/Icon_arrow_down_circle.svg';
import styles from './AcademiesSection.module.scss';

const cn = classNames.bind(styles);

const AcademiesSection = ({ theme = 'violet-theme' }) => {
  return (
    <section
      className={cn('academies-section', `${theme}`)}
      style={{ backgroundImage: `url(${backgroundParticles})` }}
    >
      <h2 className={cn('academies-section__heading')}>Academies</h2>
      <p className={cn('academies-section__paragraph')}>
        There are four disciplines available: for developers, testers, front-end
        developers and kids. Academies are taking place in Devbridge Lithuanian
        offices. Students, who are willing to join developers, testers or
        Front-End academies, need to pass the test, prove their best to get an
        invitation to enroll. This rule doesn&#39;t apply to the kids (7 to 12
        years old) academy, the admission is limited only by available number of
        entries.
      </p>
      <div className={cn('academies-section__vertical-line')}></div>
      <a href="#">
        <ArrowButton className={cn('academies-section__button')} />
      </a>
    </section>
  );
};

AcademiesSection.propTypes = {
  theme: PropTypes.string,
};

export default AcademiesSection;
