import React from 'react';
import words from '../data/words.json';

export default class FlashCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColors: ['#518ff5', '#673ab7', '#27a768', '#de5347', '#821510'],
      word: {
        "id": 0,
        "wordES": "El toro",
        "sentenceES": "El toro ha matado al torero.",
        "wordEN": "Bull",
        "sentenceEN": "The bull has killed a bullfighter.",
        "wordPL": "Byk",
        "sentencePL": "Byk zabi?‚ matadora."
      }
    };
  }
  componentDidMount() {
    try {
      if (words) {
        // let currentWord = Math.floor(Math.random() * words.length);
        // let counter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
        // for (let i = 0; i < 300; i++) {
        //   let newWord = Math.floor(Math.random() * words.length);
          // while (currentWord == newWord) {
          //   newWord = Math.floor(Math.random() * words.length);
          // }
          //currentWord = newWord;
          // switch ( currentWord ) {
          //   case 0: counter[0]++;
          //   break;
          //   case 1: counter[1]++;
          //   break;
          //   case 2: counter[2]++;
          //   break;
          //   case 3: counter[3]++;
          //   break;
          //   case 4: counter[4]++;
          //   break;
          //   case 5: counter[5]++;
          //   break;
          //   case 6: counter[6]++;
          //   break;
          //   case 7: counter[7]++;
          //   break;
          //   case 8: counter[8]++;
          //   break;
          //   case 9: counter[9]++;
          //   break;
          //   case 10: counter[10]++;
          //   break;
          //   case 11: counter[11]++;
          //   break;
          // }
        //}
        // console.log(counter);
        const word = words[Math.floor(Math.random() * words.length)];

        this.setState({
          word
        });
        const newBackground = word.id % 5;
        document.body.style = `background: ${this.state.backgroundColors[newBackground]};`;
      }
    } catch (e) {
      console.log('Error loading the list of words: ' + e);
    }
  }
  render() {
    return (
      <div className="wrapper" >
        <a target="_blank" href={'https://www.google.com/search?q=' + this.state.word.wordES + '&tbm=isch'}>Look for images</a>
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