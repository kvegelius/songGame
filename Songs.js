import {Dimensions} from 'react-native';


const dimensions = Dimensions.get('window');
const halfScreenHeight = Math.round(dimensions.height)/2;
const squareHeight = Math.round(halfScreenHeight/3);
const squareWidth = Math.round(dimensions.width/3);
const roundingPos = 20;

export const songs = [
      {
        "id": "trollmor",
        "title": "Trollmor",
        "img": require('./assets/trollmor.png'),
        "file": "trollmor.mp3",
        "top": 0,
        "left": roundingPos,
      },
      {
        "id": "vargsangen",
        "title": "Vargsången",
        "img": require('./assets/vargsangen.png'),
        "file": "vargsangen.mp3",
        "top": -roundingPos,
        "left": squareWidth,
      },
      {
        "id": "brahms_vaggvisa",
        "title": "Brahms vaggvisa",
        "img": require('./assets/brahms-vaggvisa.png'),
        "file": "brahms_vaggvisa.mp3",
        "top": 0,
        "left": squareWidth*2-roundingPos,
      },
      {
        "id": "blinka_lilla",
        "title": "Blinka lilla",
        "img": require('./assets/blinka-lilla.png'),
        "file": "blinka_lilla.mp3",
        "top": squareHeight,
        "left": 0,
      },
      {
        "id": "byssan_lull",
        "title": "Byssan lull",
        "img": require('./assets/byssan-lull.png'),
        "file": "byssan_lull.mp3",
        "top": squareHeight,
        "left": squareWidth,
      },
      {
        "id": "john_blund",
        "title": "John Blund",
        "img": require('./assets/john-blund.png'),
        "file": "john_blund.mp3",
        "top": squareHeight,
        "left": squareWidth*2,
      },
      {
        "id": "majas_visa",
        "title": "Majas visa",
        "img": require('./assets/majas-visa.png'),
        "file": "majas_visa.mp3",
        "top": squareHeight*2,
        "left": roundingPos,
      },
      {
        "id": "slumra_stilla",
        "title": "Slumra stilla",
        "img": require('./assets/slumra-stilla.png'),
        "file": "slumra_stilla.mp3",
        "top": squareHeight*2+roundingPos,
        "left": squareWidth,
      },
      {
        "id": "videvisan",
        "title": "Videvisan",
        "img": require('./assets/videvisan.png'),
        "file": "videvisan.mp3",
        "top": squareHeight*2,
        "left": squareWidth*2-roundingPos,
      }];