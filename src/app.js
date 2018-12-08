import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import FlashCard from './components/FlashCard';
import Parser from './components/Parser';

const jsx = (
  <div>
    <FlashCard />
    <Parser />
  </div>
);

ReactDOM.render(jsx, document.getElementById('app'));
