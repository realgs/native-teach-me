import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import FlashCard from './components/FlashCard';
import Parser from './components/Parser';
import GoogleSearch from './components/GoogleSearch';

const jsx = (
  <div className="wrapper">
    <GoogleSearch searchPhrase="el hombro climbing" />
    <FlashCard />
    <Parser />
  </div>
);

ReactDOM.render(jsx, document.getElementById('app'));
