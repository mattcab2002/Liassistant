import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { Interface } from './components/Interface';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
    return (
        <Router>
            <Fragment>
                <Route exact path='/' component={Home} />
                <Route exact path='/guardian' component={Interface} />
            </Fragment>
        </Router>
    );
}

export default App;
