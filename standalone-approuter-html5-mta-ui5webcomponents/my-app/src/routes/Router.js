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
const ResidentsList = lazy(() => import('../pages/Residents/List'));

const Router = () => {
  return (
    <Suspense fallback={<BusyIndicator active />}>
      <Routes>
        <Route index path={ROUTES.PLANET_LIST}  element={<PlanetList />} />
        <Route index path='/index.html'  element={<PlanetList />} />
        <Route path={ROUTES.RESIDENTS_LIST}  element={<ResidentsList />} />
        <Route path={ROUTES.BUGGY} element={<Buggy />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
        <Route path={ROUTES.ANY} element={<NotFound />} />
        <Route index path={ROUTES.HOME} element={<Navigate to={ROUTES.PLANET_LIST} />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
