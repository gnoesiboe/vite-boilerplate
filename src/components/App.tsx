import 'modern-css-reset/dist/reset.css';
import React, { VFC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { contactRoute, homeRoute } from '../routing/routes';
import ContactPage from './pages/ContactPage';
import MainNavigation from './features/mainNavigation/MainNavigation';
import MainLayout from './features/mainLayout/MainLayout';

const App: VFC = () => (
    <BrowserRouter>
        <MainLayout.Header>
            <MainNavigation />
        </MainLayout.Header>
        <MainLayout.Content>
            <Switch>
                <Route path={homeRoute} exact>
                    <HomePage />
                </Route>
                <Route path={contactRoute} exact>
                    <ContactPage />
                </Route>
            </Switch>
        </MainLayout.Content>
    </BrowserRouter>
);

export default App;
