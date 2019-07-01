import React from 'react'

import "./App.css";
import "shards-ui/dist/css/shards.min.css"
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';

import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#root')
)