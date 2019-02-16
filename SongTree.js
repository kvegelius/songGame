import React from 'react';
import {ImageBackground} from 'react-native';
import styles from './Style.js';
import SongController from './SongController';

class SongTree extends React.Component {
  

  render() {
    return (
      <ImageBackground source={require('./assets/song-tree.png')} style={styles.song_tree}> 
        <SongController></SongController>
      </ImageBackground>
    );
  }
}

export default SongTree;