import { useContext } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { StorageContext } from '../pages/App';
import './player.css'

function Player() {
  const { play, i , track} = useContext(StorageContext)

  return (
    <AudioPlayer id='playerStyle'
      autoPlay
      src={track[i]?.src}
      onPlay={e => console.log("onPlay")}
      rhap_loop--on
    // other props here

    />)
}


export default Player