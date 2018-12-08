import React from 'react';
import db from '../data/words.json';

export default class Parses extends React.Component {
  constructor(props) {
    super(props);
    this.loadData = this.loadData.bind(this);
    this.parseData = this.parseData.bind(this);
    this.addMissingDot = this.addMissingDot.bind(this);
    this.capitalize = this.capitalize.bind(this);
    this.state = {
      spanishOrder = 0,
      polishOrder = 2,
      englishOrder = 1,
      possibleEndings: ['?', '!', '.'],
      currentId: undefined,
      words: `
     brzuszki	,sit—ups	,abdominales
pompki	,push-ups	,las flexiónes
podciągnięcia	,pull-ups	,las dominadas
      `
    };
  }
  componentDidMount() {
    this.loadData(this.parseData);
  }
  loadData(callback) {
    try {
      if (db) {
        this.setState({
          currentId: db.length
        });
      }
    } catch (e) {
      console.log('Error parsing dataset from text ' + e);
    }
    setTimeout(() => {
      if (typeof callback == 'function') {
        callback();
      }
    }, 500);
  }
  parseData() {
    const lines = this.state.words.trim().split('\n');
    const output = lines.map((line) => {
      const language = line.split('-');
      const spanishChunk = language[spanishOrder].trim().split(/[()]/).replace(/_/g,'-');
      const polishChunk = language[polishOrder].trim().split(/[()]/).replace(/_/g,'-');
      const englishChunk = language[englishOrder].trim().split(/[()]/).replace(/_/g,'-');

      const wordES = spanishChunk[0].trim();
      const sentenceES = spanishChunk[1];
      const wordPL = polishChunk[0].trim();
      const sentencePL = polishChunk[1];
      const wordEN = englishChunk[0].trim();
      const sentenceEN = englishChunk[1];

      this.setState({ currentId: this.state.currentId + 1 });
      return {
        "id": this.state.currentId,
        "wordES": this.capitalize(wordES),
        "sentenceES": sentenceES && this.capitalize(this.addMissingDot(sentenceES)),
        "wordPL": this.capitalize(wordPL),
        "sentencePL": sentencePL && this.capitalize(this.addMissingDot(sentencePL)),
        "wordEN": this.capitalize(wordEN),
        "sentenceEN": sentenceEN && this.capitalize(this.addMissingDot(sentenceEN))
      };
    });
    console.log(output);
    console.log(JSON.stringify(output));
  }
  addMissingDot(expression) {
    const lastCharacter = expression[expression.length - 1];
    if (this.state.possibleEndings.indexOf(lastCharacter) == -1) {
      expression += '.';
    }
    return expression;
  }
  capitalize(expression) {
    const firstChar = expression.charAt(0);
    if (firstChar == '¿' || firstChar == '¡') {
      return firstChar + expression.charAt(1).toUpperCase() + expression.slice(2);
    } else {
      return firstChar.toUpperCase() + expression.slice(1);
    }
  }
  render() {
    return (
      <div>

      </div>
    );
  }

}