import React from 'react';
import classNames from 'classnames/bind';
import { RouteManager } from './routes/routing';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './App.module.scss';

const cn = classNames.bind(styles);

export default function App() {
  return (
    <div className={cn('wrapper')}>
      <Header />
      <main>
        <RouteManager />
      </main>
      <Footer />
    </div>
  );
}

App.propTypes = {};
