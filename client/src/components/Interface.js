import React from 'react';
import { Screenings } from './Interface/Screenings';
import { Patients } from './Interface/Patients';
import { Dashboard } from './Interface/Dashboard';
import { SideBar } from './Interface/SideBar';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Interface = () => {
    return (
        <Router>
            <div className='d-flex'>
                <SideBar />
                <Route exact path='/guardian/dashboard' component={Dashboard} />
                <Route
                    exact
                    path='/guardian/screenings'
                    component={Screenings}
                />
                <Route exact path='/guardian/patients' component={Patients} />
            </div>
        </Router>
    );
};
