import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './components/dashboard/dashboard'
import * as serviceWorker from './serviceWorker';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'antd/dist/antd.js';
import 'antd/dist/antd.css';
import 'antd/dist/antd.min.js';
import 'antd/dist/antd.min.css';


ReactDOM.render(<Dashboard />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
