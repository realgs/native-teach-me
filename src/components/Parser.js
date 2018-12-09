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
      spanishOrder: 0,
      polishOrder: 2,
      englishOrder: 1,
      possibleEndings: ['?', '!', '.'],
      currentId: 0,
      words: `
el callo (tengo un callo en mi pierna de andar demasiado)- corn (I have a corn on my foot from walking too much) - odcisk (mam odcisk na stopie od tego chodzenia)

el pulgar (tienes que usar el pulgar en esta presa) - thumb (you have to use the thumb on this grip)- kciuk(musisz użyć kciuka na tym chwycie)

el indice (este agujero solo cabe el indice) - index finger (only the index finger fits in this pocket) - palec wskazujący (ta dziurka mieści tylko palec wskazujący)

el corazón / dedo medio (el dedo corazón solemos utilizar para expresar emociones pero vale mejor para escalar)- middle finger (we often use the middle finger to express the emotions but it works better in climbing)- palec środkowy (często używamy środkowego palca do wyrażania emocji ale lepiej nadaje się do wspinaczki)

el anular -  ring finger - palec serdeczny

el menique - little finger, pinky - mały palec

la palma - hand - dłoń

la muñeca (me duele la muñeca) - wrist (I have a pain in my wrist) - nadgarstek (boli mnie nadgarstek)

las agujetas (tengo agujetas desde ayer) - sore (I have muscle sores from yesterday)- zakwasy (mam zakwasy po wczoraj)

antebrazo (no tires tanto de antebrazos) - forearm (don’t use your forearms so much) - przedramię (nie ciągnij tak z przedramion/rąk)

Asegurar (Mejor yo voy a asegurarle en esta vía.) - Belay (It’s better if I am going to belay him on this route.) -  Asekurować (Lepiej żebym to ja asekurował go na tej drodze.)

Chapar (Chápalo, que ya estas demasiado alto!) - Clip in (Clip it in, you are already too high!) - Wpinać się (Wepnij się, już jesteś za wysoko!)

pillar (Pillame, que ya estoy agotado / cansado.)- english here (?Catch me, I’m really tired.) (phrase with ?catch?) - złapać, dać blok (Złap mnie bo już jestem zmęczony.)

el romo (junta los manos en el romo) - sloper (match your hands on a sloper) - oblak (dołóż do oblaka)

juntar manos (junta los manos en el romo) - match hands (match your hands on a sloper) - złącz ręce, dołóż (dołóż do oblaka)

jarra, cazo (jarra es un tipo de agarre que es perfecto para reposar) - jug, bucket (a jug a type of hold that is perfect to rest on) - klama (klama jest idealnym typem chwytu na resta)

pinza  - pinch  - ścisk

la regleta  - crimp  - krawądka

el invertido  - undercling  - podchwyt

el lateral  - sidepull  - odciąg

la presa (esta presa es muy buena) - hold (this hold is really good) - chwyt (ten chwyt jest bardzo dobry)

la presa buena (en los desplomes suelen haber presas buenas) - a good hold (on overhangs there usually are good holds) - dobry chwyt (w przewieszeniach zwykle są dobre chwyty)

el agujero (monodedo, bidedo, tridedo) - pocket (one, two, three finger pocket) - dziurka (fucker, dwójka, trójka )

canto (hay muchos cantos buenos por alli) - edge (there are a lot of good edges) - kant, klama (tam jest dużo klam)

la microrregleta - small crimp, rippel - mała krawądka

la chorrera - tufa - tufa

el empotre - jam - klin, klinować

presa en extensión - open_hand grip - otwarty chwyt

la puerta - barn door - pozycja, która cię otwiera na drugą stronę

posición de la rana (la posición de la rana es la mas popular entre principiantes)- frogging (frogging is the most common technique among the beginners)- iść frontem / na żabę (technika wchodzenia na żabę jest popularna wśród początkujących)

hacer la bicicleta - dropknee / egyptian - pozycja boczna / wkręcanie się

el empotre de rodilla (el empotre de rodilla ayuda mucho en desplomes)- kneebar, egyptian (kneebar is crucial in overhangs)- klinowanie kolana (klinowanie kolana pomaga znacząco na przewieszeniach)

escalar en oposición - to steam -  iść w zacięciu

los movimientos de compresión - compression moves - kompresja

bavaresa  - layback, lieback - złapać na odciąg

hacer la bandera (tienes que hacer la bandera para equilibrar el peso del cuerpo) - to flag (you have to flag in order to balance your body weight) - robić flagę (musisz zrobić flagę by balansować masą ciała)

montarse sobre el pie - rockover - wyjść z wysokiego stopnia

pie_mano - hand_foot matching - dołożyć nogę do ręki

mantelar - mantel - mantlować

bloquear - lock_off - rest

escalar en estático - static climbing - wspinaczka statyczna

escalada dinámica - dynamic climbing - wspinaczka dynamiczna

movimiento dinámico - dynamic, dyno - ruch dynamiczny, walnięcie

lancar - dyno / double-dyno - zrobić skok, rzucić się

subir a campus - campus - iść na samych łapach

yaniro - figure of four - pozycja czwórka
      `
    };
  }
  componentDidMount() {
    if ( this.state.words && this.state.words.trim().length > 0){
      this.loadData(this.parseData);
    }

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
    let lines = this.state.words.trim().split('\n'). filter( (line) => {
        if ( !line.trim() ) {

          return false;
        }
        return true;
      }
    );
    const output = lines.map((line) => {
      const language = line.split('-');
      const spanishChunk = language[this.state.spanishOrder].replace(/_/g, '-').trim().split(/[()]/);
      const polishChunk = language[this.state.polishOrder].replace(/_/g, '-').trim().split(/[()]/);
      const englishChunk = language[this.state.englishOrder].replace(/_/g, '-').trim().split(/[()]/);

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