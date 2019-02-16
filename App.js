import React from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, TouchableOpacity, Dimensions, Image} from 'react-native';
import styles from './Style.js';
import Sound from 'react-native-sound';
import PickedSong from './PickedSong';
//import {SongChoice} from './SongChoice.js';

const dimensions = Dimensions.get('window');
const halfScreenHeight = Math.round(dimensions.height)/2;
const squareHeight = Math.round(halfScreenHeight/3);
const squareWidth = Math.round(dimensions.width/3);
const roundingPos = 20;

class SongChoice extends React.Component {
  constructor(props) {
    super(props);
  }

  render (){
    return (
        <TouchableOpacity 
          style={[styles.song_choice, {top:this.props.song.top, left:this.props.song.left}]}
          onPress={() => this.props.onPress(this.props.song.song)}
        >
          <Image style={styles.img_size} source={this.props.song.img}/>
        </TouchableOpacity>  
    )
  }
}

class SongController extends React.Component {
  constructor(props){
    super(props);
    var sound = null;
    this.state = {
      current_song: null,
      isPlaying: false,
    }

  }

  initSong(song){
    if(this.state.current_song){
      sound.reset();
    } 
      
    sound = new Sound(song, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        alert("Something wrong happened, when trying to initiate the song.");
      }
      // play when loaded
      this.playSong(song);
        
    });

  }

  pauseSong(){
    sound.pause();
    this.setState({
      isPlaying: false,
    });
  }

  playSong(song){
    sound.play();
    this.setState({
      isPlaying: true,
      current_song: song
    });
  }

  renderSongChoice() {
    var songs = [
      {
        "id": "trollmor",
        "title": "Trollmor",
        "img": require('./assets/trollmor.png'),
        "song": "trollmor.mp3",
        "top": 0,
        "left": roundingPos,
      },
      {
        "id": "vargsangen",
        "title": "Vargsången",
        "img": require('./assets/vargsangen.png'),
        "song": "vargsangen.mp3",
        "top": -roundingPos,
        "left": squareWidth,
      },
      {
        "id": "brahms_vaggvisa",
        "title": "Brahms vaggvisa",
        "img": require('./assets/brahms-vaggvisa.png'),
        "song": "brahms_vaggvisa.mp3",
        "top": 0,
        "left": squareWidth*2-roundingPos,
      },
      {
        "id": "blinka_lilla",
        "title": "Blinka lilla",
        "img": require('./assets/blinka-lilla.png'),
        "song": "blinka_lilla.mp3",
        "top": squareHeight,
        "left": 0,
      },
      {
        "id": "byssan_lull",
        "title": "Byssan lull",
        "img": require('./assets/byssan-lull.png'),
        "song": "byssan_lull.mp3",
        "top": squareHeight,
        "left": squareWidth,
      },
      {
        "id": "john_blund",
        "title": "John Blund",
        "img": require('./assets/john-blund.png'),
        "song": "john_blund.mp3",
        "top": squareHeight,
        "left": squareWidth*2,
      },
      {
        "id": "majas_visa",
        "title": "Majas visa",
        "img": require('./assets/majas-visa.png'),
        "song": "majas_visa.mp3",
        "top": squareHeight*2,
        "left": roundingPos,
      },
      {
        "id": "slumra_stilla",
        "title": "Slumra stilla",
        "img": require('./assets/slumra-stilla.png'),
        "song": "slumra_stilla.mp3",
        "top": squareHeight*2+roundingPos,
        "left": squareWidth,
      },
      {
        "id": "videvisan",
        "title": "Videvisan",
        "img": require('./assets/videvisan.png'),
        "song": "videvisan.mp3",
        "top": squareHeight*2,
        "left": squareWidth*2-roundingPos,
      },

    ];

    const songsItems = songs.map((song) =>
      //TODO: This should be an own component, called song choice.
      <SongChoice 
        key={song.id} 
        song={song} 
        onPress={() => this.handleClick(song)}
      />


    );
    return  (
      <View style={styles.song_circles}>{songsItems}</View>
    );
  }

  renderPickedSong(){
    return(
      <View>
        <PickedSong 
          onRef={ref => (this.PickedSong = ref)}
          image={require('./assets/videvisan.png')}/>
      </View>
    )
  }
  
  handleClick = (song) => {
    if(song.song === this.state.current_song){
      if(this.state.isPlaying){
        this.pauseSong();
        this.PickedSong.toggleShowHide(0, 0, null); 
      } 
      else{
        this.playSong(song.song);
        this.PickedSong.toggleShowHide(1, 1000, song.img);
      }
    }
    else{
      this.initSong(song.song);
      this.PickedSong.toggleShowHide(1, 1000, song.img);
    }
  }

  //Render the circles on the tree
  render(){
    return (
      <View >
        {this.renderSongChoice()}     
        {this.renderPickedSong()}
      </View>
    );
  }
}


class SongTree extends React.Component {
  

  render() {
    return (
      <ImageBackground source={require('./assets/song-tree.png')} style={styles.song_tree}> 
        <SongController></SongController>
      </ImageBackground>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View>
        <SongTree/>
      </View>
    );
  }
}


