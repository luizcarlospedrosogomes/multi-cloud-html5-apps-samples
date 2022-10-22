import { BusyIndicator } from '@ui5/webcomponents-react';
import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PageWithAuthorizationRestriction from '../auth/PageWithAuthorizationRestriction';
import { ROUTES } from './Routes';

const TodoList = lazy(() => import('../pages/Todo/List/TodoList'));
const TodoEdit = lazy(() => import('../pages/Todo/Edit/TodoEdit'));
const NotFound = lazy(() => import('../pages/Fallback/NotFound'));
const Buggy = lazy(() => import('../pages/Fallback/Buggy'));
const PlanetList = lazy(() => import('../pages/Planet/List'));

const Router = () => {
  return (
    <Suspense fallback={<BusyIndicator active />}>
      <Routes>
        <Route
          path={ROUTES.PLANET_LIST}
          element={<PlanetList />}
        />
        <Route path={ROUTES.BUGGY} element={<Buggy />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
        <Route path={ROUTES.ANY} element={<NotFound />} />
        <Route path={ROUTES.HOME} element={<Navigate to={ROUTES.PLANET_LIST} />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
