import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import Products from './components/Products';
import Search from './components/Search';

const jsx = (
  <div className="wrapper">
    <Search />
    <Products />
  </div>
);

ReactDOM.render(jsx, document.getElementById('app'));
