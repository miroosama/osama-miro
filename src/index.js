import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {withFauxDOM} from 'react-faux-dom'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
