import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './routes';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.participantSignUp()} />
        <Route path={routes.participantSignIn()} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
