
import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import'open-iconic/font/css/open-iconic-bootstrap.min.css';
import './main.css';
import { Routes } from './router';


render(<Routes />, document.getElementById('app-root'));