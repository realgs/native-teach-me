import React from 'react';
import SVG from 'react-inlinesvg';

export default class GoogleSearch extends React.Component {
  constructor(props) {
    super(props);
    this.openInNewTab = this.openInNewTab.bind(this);
    this.openImageInNewTab = this.openImageInNewTab.bind(this);
    this.clearSearchQueryPlaceholder = this.clearSearchQueryPlaceholder.bind(this);
    this.state = {
      keyword: 'spanish',
    };
  }
  componentDidMount() {
    setTimeout(function () {
      let searchQuery = document.getElementById('search-query');
      searchQuery.placeholder = document.getElementById('wordES').innerHTML;
      searchQuery.focus();
    }, 100)
  }
  componentDidUpdate(prevProps, prevState) {
  }
  openInNewTab(event) {
    event.preventDefault();
    const searchQuery = document.getElementById("search-query").value;
    const wordES = document.getElementById("wordES").innerHTML;
    const searchPhrase = searchQuery ? searchQuery : `${wordES} ${this.state.keyword}`;
    let win = window.open("https://www.google.com/search?q=" + searchPhrase, '_blank');
    win.opener = null;
    win.focus();
  }
  openImageInNewTab(event) {
    event.preventDefault();
    const searchQuery = document.getElementById("search-query").value;
    const wordES = document.getElementById("wordES").innerHTML;
    const searchPhrase = searchQuery ? searchQuery : `${wordES} ${this.state.keyword}`;
    let win = window.open("https://www.google.com/search?q=" + searchPhrase + "&tbm=isch", '_blank');
    win.opener = null;
    win.focus();
  }
  clearSearchQueryPlaceholder() {
    document.getElementById("search-query").placeholder = "";
  }
  render() {
    return (
      <form className="google" onSubmit={this.openInNewTab}>
        <img className="google__logo" src="./images/google.png"></img>
        <div className="google__search">
          <input type="text" id="search-query" className="google__search__box" onClick={this.clearSearchQueryPlaceholder} autoFocus />
          <a id="search-button" className="google__search__camera" onClick={this.openImageInNewTab}>
            <SVG src="./images/baseline-camera_alt-24px.svg" />
          </a>
        </div>
      </form>

    );
  }
}