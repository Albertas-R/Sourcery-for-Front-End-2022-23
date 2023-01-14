import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './VideoCard.module.scss';
import Icon_play from '~/assets/icons/Icon_play.svg';

const cn = classNames.bind(styles);

const VideoCard = ({ imagePath }) => {
  return (
    <section className={cn('video-card')}>
      <figure className={cn('video-card__container')}>
        <img src={imagePath} alt="" />
        <div className={cn('video-controls')}>
          <button type="button" className={cn('play-button')}>
            <Icon_play />
          </button>
        </div>
      </figure>
    </section>
  );
};

VideoCard.propTypes = {
  imagePath: PropTypes.string.isRequired,
};

export default VideoCard;
