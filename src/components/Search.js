import React from 'react';
import SVG from 'react-inlinesvg';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.openGoogleSearch = this.openGoogleSearch.bind(this);
    this.openGoogleImageSearch = this.openGoogleImageSearch.bind(this);
    this.openDomodiImageSearch = this.openDomodiImageSearch.bind(this);
    this.clearSearchQueryPlaceholder = this.clearSearchQueryPlaceholder.bind(this);
    this.state = {
      placeholderGoogle: 'Sukienka domodi',
      placeholderDomodi: 'Sukienka',
    };
  }
  componentDidMount() {
    setTimeout(function () {
      let searchQuery = document.getElementById('search-query');
      searchQuery.placeholder = 'Sukienka domodi';
      searchQuery.focus();
    }, 500)
  }
  componentDidUpdate(prevProps, prevState) {
  }
  openGoogleSearch(event) {
    event.preventDefault();
    const searchQuery = document.getElementById("search-query").value;
    const searchPhrase = searchQuery ? searchQuery : this.state.placeholderGoogle;
    let win = window.open("https://www.google.com/search?q=" + searchPhrase, '_blank');
    win.opener = null;
    win.focus();
  }
  openGoogleImageSearch(event) {
    event.preventDefault();
    const searchQuery = document.getElementById("search-query").value;
    const searchPhrase = searchQuery ? searchQuery : this.state.placeholderGoogle;
    let win = window.open("https://www.google.com/search?q=" + searchPhrase + "&tbm=isch", '_blank');
    win.opener = null;
    win.focus();
  }
  openDomodiImageSearch(event) {
    event.preventDefault();
    const searchQuery = document.getElementById("search-query").value;
    const searchPhrase = searchQuery ? searchQuery : this.state.placeholderDomodi;
    let win = window.open("https://www.domodi.pl/wyszukaj?search=" + searchPhrase + "&Sort=score", '_blank');
    win.opener = null;
    win.focus();
  }
  clearSearchQueryPlaceholder() {
    document.getElementById("search-query").placeholder = '';
  }
  render() {
    return (
      <form className="search" onSubmit={this.openGoogleSearch}>
        <img className="search__logo" src="./images/google.png"></img>
        <div className="search__query">
          <input type="text" id="search-query" className="search__input" onClick={this.clearSearchQueryPlaceholder} autoFocus />
          <a id="search-google" className="search__button" onClick={this.openGoogleImageSearch}>
            <SVG src="./images/baseline-camera_alt-24px.svg" />
          </a>
          <a id="search-domodi" className="search__button" onClick={this.openDomodiImageSearch}>
            <img src="./images/icon-48.png" alt="Domodi" width="24" height="24" />
          </a>
        </div>
      </form>

    );
  }
}