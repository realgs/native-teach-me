import React from 'react';
import words from '../data/words.json';

export default class FlashCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColors: ['#518ff5', '#673ab7', '#27a768', '#de5347', '#821510'],
      word: {
        "id": 4,
        "wordES": "El toro",
        "sentenceES": "El toro ha matado al torero.",
        "wordEN": "Bull",
        "sentenceEN": "The bull has killed a bullfighter.",
        "wordPL": "Byk",
        "sentencePL": "Byk zabił matadora."
      }
    };
  }
  componentDidMount() {
    try {
      if (words) {
        const word = words[Math.floor(Math.random() * words.length)];
        this.setState({
          word
        });
        console.log(Math.floor(Math.random() * words.length));
        const newBackground = word.id % 5;
        console.log(newBackground);
        document.body.style = `background: ${this.state.backgroundColors[newBackground]};`;
      }
    } catch (e) {
      console.log('Error loading the list of words: ' + e);
    }
  }
  render() {
    return (
      <div className="wrapper" >
        <div className="content">
          <div className="language">
            <div className="language__definition">
              <h1 className="language__definition__word typewriter">
                {this.state.word.wordES}
              </h1>
              <p className="language__definition__link">
                (
                  <a target="_blank" href={'https://www.spanishdict.com/translate/' + this.state.word.wordES}>def</a>
                )
              </p>
            </div>
            <div className="language__sentence">
              <p className="temp">
                {this.state.word.sentenceES}
              </p>
            </div>
          </div>
          <div className="language">
            <div className="language__definition">
              <h1 className="language__definition__word typewriter">
                {this.state.word.wordEN}
              </h1>
              <p className="language__definition__link">
                (
                  <a target="_blank" href={'https://www.merriam-webster.com/dictionary/' + this.state.word.wordEN}>def</a>
                )
              </p>
            </div>
            <div className="language__sentence">
              <p className="temp">
                {this.state.word.sentenceEN}
              </p>
            </div>
          </div>
          <div className="language">
            <div className="language__definition">
              <h1 className="language__definition__word typewriter">
                {this.state.word.wordPL}
              </h1>
              <p className="language__definition__link">
                (
                  <a target="_blank" href={'https://www.diki.pl/' + this.state.word.wordPL}>def</a>
                )
              </p>
            </div>
            <div className="language__sentence">
              <p className="temp">
                {this.state.word.sentencePL}
              </p>
            </div>
          </div>
        </div>
      </div >
    );
  }
}