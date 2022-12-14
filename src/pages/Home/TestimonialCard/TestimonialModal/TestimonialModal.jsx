import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Modal from '~/components/Modal';
import IconClose from '~/assets/icons/Icon_close_modal_x.svg';
import styles from './TestimonialModal.module.scss';

const cn = classNames.bind(styles);

const TestimonialModal = ({ photo, message, name, academy, closeModal }) => {
  return (
    <Modal closeModal={closeModal}>
      <div className={cn('testimonial-modal')}>
        <header className={cn('header')}>
          <div className={cn('testimonial-modal__graduate')}>
            <img
              className={cn('testimonial-modal__photo')}
              src={photo}
              alt={`Photo of ${name}`}
            />
            <div className={cn('testimonial-modal__graduate-info')}>
              <h2 className={cn('testimonial-modal__name')}>{name}</h2>
              <h2 className={cn('testimonial-modal__academy')}>{academy}</h2>
            </div>
          </div>
          <div className={cn('testimonial-modal__close')} onClick={closeModal}>
            <IconClose alt="close icon" />
          </div>
        </header>

        <p className={cn('testimonial-modal__message')}>{message}</p>
      </div>
    </Modal>
  );
};

TestimonialModal.propTypes = {
  photo: PropTypes.string,
  message: PropTypes.string,
  name: PropTypes.string,
  academy: PropTypes.string,
  closeModal: PropTypes.func,
};

export default TestimonialModal;