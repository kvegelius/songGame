import { StyleSheet, Dimensions} from 'react-native';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.height);
const screenWidth = Math.round(dimensions.width);
const screenHeight = Math.round(dimensions.height);
const halfScreenHeight = screenHeight/2;
const squareHeight = Math.round(halfScreenHeight/3);
const squareWidth = Math.round(dimensions.width/3);

export default StyleSheet.create({
  song_tree: {
    resizeMode: 'cover',
    width: '100%',
    height: imageHeight,
  },
  song_circles: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    top: 50,
  },
  song_choice: {
    position: 'absolute',
    margin: 10,
    height: 100,
    width: 100,
    
    backgroundColor: '#ffffff',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#000000',

    justifyContent: 'center',
    alignItems: 'center',
  },
  img_size: {
    height: 50,
    width: 50
  },
  picked_song_position: {
    position:'absolute',
    top: screenHeight-300,
    left: screenWidth/2
  },
  picked_song_size: {
    height: 200,
    width: 200
  },

});