import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { appRoutes } from './appRoutes';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={appRoutes.index()} />
        <Route path={appRoutes.participantSignUp()} />
        <Route path={appRoutes.participantSignIn()} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
