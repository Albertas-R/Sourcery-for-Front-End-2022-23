import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from './routeConfig';
import MainLayout from '../components/MainLayout/';

export const RouteManager = React.memo(() => {
  return (
    <Routes>
      {Object.entries(routeConfig).map(([key, route]) => {
        const { component: Component, path } = route;
        return (
          <Route
            key={key}
            path={path}
            element={
              <Suspense fallback={<>Loading...</>}>
                <MainLayout>
                  <Component />
                </MainLayout>
              </Suspense>
            }
          ></Route>
        );
      })}
    </Routes>
  );
});

RouteManager.displayName = 'RouteManager';
