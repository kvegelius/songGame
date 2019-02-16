import React from 'react';
import {View, TouchableOpacity, Dimensions, Image} from 'react-native';
import styles from './Style.js';
import Sound from 'react-native-sound';
import PickedSong from './PickedSong';
import SongChoice from './SongChoice';
import {songs} from './Songs';

class SongController extends React.Component {
  constructor(props){
    super(props);
    var sound = null;
    this.state = {
      current_song: null,
      isPlaying: false,
      songs: songs,
    }

  }

  initSong(file){
    if(this.state.current_song){
      sound.reset();
    } 
      
    sound = new Sound(file, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        alert("Something wrong happened, when trying to initiate the song.");
      }
      // play when loaded
      this.playSong(file);
        
    });

  }

  pauseSong(){
    sound.pause();
    this.setState({
      isPlaying: false,
    });
  }

  playSong(file){
    sound.play();
    this.setState({
      isPlaying: true,
      current_song: file
    });
  }

  renderSongChoice() {

    const songsItems = this.state.songs.map((song) =>
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
          image={null}/>
      </View>
    )
  }
  
  handleClick = (song) => {
    if(song.file === this.state.current_song){
      if(this.state.isPlaying){
        this.pauseSong();
        this.PickedSong.toggleShowHide(0, 0, null); 
      } 
      else{
        this.playSong(song.file);
        this.PickedSong.toggleShowHide(1, 1000, song.img);
      }
    }
    else{
      this.initSong(song.file);
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

export default SongController;