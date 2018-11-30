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
      possibleEndings: ['?', '!', '.'],
      currentId: undefined,
      words: `
     presumir (lo hizo solo para presumir) - wystawiać na pokaz (zrobiła to tylko na pokaz) - to show off (she did it just to show off)
baboso (es baboso porque quiere ascender) - płaszczący się, służalczy, obleśny (płaszczy się bo chce dostać awans) - slimy (he’s slimy because he wants to get the promotion)
molestar (¡no molestar!) - przeszkadzać (nie przeszkadzać!) - disturb (do not disturb!)
la racha (fuertes rachas de viento lo rompieron) - podmuch wiatru (silne podmuchy wiatru to zniszczyły) - draught (strong draughts damaged it)
la racha buena (fun una buena racha) - dobra passa (to była dobra passa) - streak (it was a winning streak)
la racha mala (tengo mala racha toda la semana) - niefart , pech (mam pecha cały tydzień) - bad break (I have a bad break all week long)
atacar, atentar (le atacaron de repente y cogieron su movil) - napaść na kogoś (napadli go nagle i zabrali jego telefon) - attack, assault (they attacked him suddenly and took his phone)
manitas  (mi vecino es un manitas, el sabe reparar todo) - złota rączka (mój sąsiad to złota rączka, wie jak naprawić wszystko) - handyman (my neighbour is a handyman, he knows how to repair anything)
la burla (burlas aparte, hablamos en serio) - kpina, żart (żarty na bok, rozmawiamy poważnie) - joke (joking apart, we talk seriously)
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
      const spanishChunk = language[0].trim().split(/[()]/);
      const polishChunk = language[1].trim().split(/[()]/);
      const englishChunk = language[2].trim().split(/[()]/);

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