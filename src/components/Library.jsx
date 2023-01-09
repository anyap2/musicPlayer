import { useContext, useEffect, useState } from "react"
import { StorageContext } from "../pages/App"
import "./library.css"
import NowPlaying from "./NowPlaying"


export default function Library() {

    const { track, setPlay, setPhoto, photo, setI,  } = useContext(StorageContext)

    const [played, setPlayed] = useState([])

    return (
        <div id="libraryDiv">
            <h2>Your library</h2>
            <div id="libraryDiv">
                {track.length && track.map((song, index) =>
                    <p className="text songsList" key={index}
                        onClick={() => {
                            setPlay(song.src)
                            setPhoto(song.image)
                            setI(index)
                            setPlayed([...played, { "src": song.src, "image": song.image, "index": index }])
                            localStorage.setItem("playedSongs", JSON.stringify(played))
                        }}>
                        <img id="image" src={song.image} />
                        {song.artist}
                        -
                        {song.name}
                    </p>
                )}
            </div>
        </div>
    )
}