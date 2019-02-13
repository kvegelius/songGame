class PickedSong extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      image: this.props.image,
      fadeAnim: new Animated.Value(0),
    };
  }
  
  componentDidMount() {
    this.props.onRef(this);
  }

  componentWillUnmount() {
    this.props.onRef(undefined);
  }

  toggleShowHide(toValue, duration, songImg) {
    this.state.image = songImg;
    Animated.sequence([
      Animated.timing(
        this.state.fadeAnim,
        {
          toValue: 0,
          duration: 0,
        }
      ),
      Animated.timing(
        this.state.fadeAnim,
        {
          toValue: toValue,
          duration: duration,
        }
      ),
    ]).start();
  }

  render (){
    return (
      <Animated.View 
        style={{opacity: this.state.fadeAnim}}
      >
        <Image style={[styles.picked_song_position, styles.picked_song_size]} source={this.state.image}/>
      </Animated.View>
    )
  }

}