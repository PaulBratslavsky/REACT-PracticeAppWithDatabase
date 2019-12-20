import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

const App = () => (
    <Router>
        <Routes />
    </Router>
)


ReactDOM.render(<App />, document.getElementById('root'));

