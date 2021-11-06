import { About } from './Home/About';
import { Footer } from './Home/Footer';
import { Header } from './Home/Header';
import { Main } from './Home/Main';
import { ProjectInfo } from './Home/ProjectInfo';
import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export const Home = () => {
    return (
        <Fragment>
            <Header />
            <Main />
            <About />
            <hr />
            <ProjectInfo />
            <Footer />
        </Fragment>
    );
};
