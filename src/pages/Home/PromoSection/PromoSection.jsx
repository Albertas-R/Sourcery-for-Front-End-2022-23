import React from 'react';
import classNames from 'classnames/bind';
import Image_Promo from '~/assets/images/Image_Promo.svg';
import styles from './PromoSection.module';

const cn = classNames.bind(styles);

const PromoSection = () => {
  return (
    <section className={cn('promo-section')}>
      <section className={cn('section-text')}>
        <h1 className={cn('section-text__heading')}>
          Sourcery <br></br>
          Academy
        </h1>
        <p className={cn('section-text__text')}>
          Sourcery academy is our free of charge education program created to
          allow students to improve their skills and prepare for a career in the
          IT industry. There are three academies available. They serve as our
          long- term commitment to increase the number of students in Lithuania
          entering information technologies studies.
        </p>
        <p className={cn('section-text__button')}>BUTTON WILL BE HERE</p>
      </section>
      <figure className={cn('section-image')}>
        <Image_Promo />
      </figure>
    </section>
  );
};
export default PromoSection;
