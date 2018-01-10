import 'babel-polyfill';
import React, {PropTypes} from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import './assets/styles/styles.scss';

render (
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('resume-wrapper')
)