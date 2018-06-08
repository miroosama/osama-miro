import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {withFauxDOM} from 'react-faux-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './style.css'
import { Link } from 'react-router-dom'
ReactDOM.render(
  <Router>
    <App />
  </Router>, document.getElementById('root'));
registerServiceWorker();
