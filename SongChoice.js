import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import styles from './Style.js';

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

export default SongChoice;