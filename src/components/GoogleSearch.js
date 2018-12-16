import React from 'react';

const GoogleSearch = ({ searchPhrase}) => (
  <form className="google" action="https://www.google.com/search?q=escalada">
    <img className="google__logo" src="./images/google.png"></img>
    <input type="text" className="google__searchbox"></input>
    <div className="google__images">
      <a target="_blank" href={'https://www.google.com/search?q=' + {searchPhrase} + '&tbm=isch'}>
        Look up at Google Images
      </a>
    </div>
  </form>
);

export default GoogleSearch;