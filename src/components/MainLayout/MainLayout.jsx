import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './MainLayout.module.scss';
import Header from '../Header';
import Footer from '../Footer';

const cn = classNames.bind(styles);

function MainLayout({ children }) {
  return (
    <div className={cn('page')}>
      <div className={cn('page__header')}>
        <Header />
      </div>
      <main className={cn('page__main')}>{children}</main>
      <div className={cn('page__footer')}>
        <Footer />
      </div>
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
