import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ListaAcionamento from "./components/listaAcionamentos/ListaAcionamentos"
import { BrowserRouter, Switch, Route } from 'react-router-dom'



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/lista" component={ListaAcionamento} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

