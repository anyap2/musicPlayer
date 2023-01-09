import { useContext, useEffect } from "react"
import { StorageContext } from "../pages/App"
import Player from "./Player"
import './nowPlaying.css'

export default function NowPlaying() {

    const { photo, track, i, } = useContext(StorageContext)


    return (
        <>
            {i ?// useEffect()--put the chosen track in useEffect!!
                <div className="nowPlayingDiv">
                    <img className="nowPlayingTrack" src={track[i]?.image} />
                    <h5>{track[i]?.name}</h5>
                    <h6>{track[i]?.artist}</h6>
                </div>
                :
                <div className="nowPlayingDiv">
                    <img className="trackPhoto" src="img/SongsImg/vinilphoto.jpg" />
                </div>
            }
        </>

    )
}