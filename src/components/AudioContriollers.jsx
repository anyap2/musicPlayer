import { useContext, useEffect, useRef, useState } from 'react'
import { StorageContext } from '../pages/App'
import './audioControllers.css'



const AudioControllers = ({
    isPlaying,
    onPlayPauseClick,
    onPrevClick,
    onNextClick, }) => {

    const { play, i, setI, track, setPlay } = useContext(StorageContext)

    // Refs
    const audioRef = useRef(new Audio(track[i]?.src))
    const intervalRef = useRef()
    const isReady = useRef(false)

    const audioElement = new Audio(track[i]?.src);

    audioElement.play();
    audioElement.pause();
    // audioElement.currentTime();
    // audioElement.ended();
    // audioElement.duration();


    const { duration } = audioRef.current

    // State
    const [trackProgress, setTrackProgress] = useState(0);


    const ToPrevTrack = () => {
        i - 1 < 0 ? setI(track.length - 1)
            : setI(i - 1)
    }

    const ToNextTrack = () => {
        i < (track - 1) ? setI(i + 1)
            : setI(0)
    }


    useEffect(() => {
        play ? audioRef.current.play()

            : audioRef.current.pause()
    }, [play]);

    useEffect(() => {
        return () => {
            audioRef.current.pause();
            clearInterval(intervalRef.current);
        }
    }, []);


    useEffect(() => {
        audioRef.current.pause();

        audioRef.current = new Audio(track[i]?.src);
        setTrackProgress(audioRef.current.currentTime);

        if (isReady.current) {
            audioRef.current.play();
            setPlay(true);
            startTimer();
        }
        else { isReady.current = true; }
    }, [i]);

    const startTimer = () => {
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            audioRef.current.ended ? onNextClick()
                : setTrackProgress(audioRef.current.currentTime);

        }, [1000]);
    }

    useEffect(() => {
        if (play) {
            audioRef.current.play();
            startTimer();
        }
        else {
            clearInterval(intervalRef.currentА);
            audioRef.current.pause();
        }
    }, [play])

    useEffect(() => {
        audioRef.current.pause();

        audioRef.current = new Audio(track[i]?.src);
        setTrackProgress(audioRef.current.currentTime);

        if (isReady.current) {
            audioRef.current.play();
            setPlay(true);
            startTimer();
        }
    }, [i]);

    const onScrub = (value) => {
        clearInterval(intervalRef.current);
        audioRef.current.currentTime = value;
        setTrackProgress(audioRef.current.currentTime);
    }

    const onScrubEnd = () => {
        if (!play) {
          setPlay(true);
        }
        startTimer();
      }


    return (
        <div id="myPlayerDiv">
            <div id='trackController'>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="controllers bi bi-skip-start"
                    viewBox="0 0 16 16"
                    onClick={onPrevClick}>
                    <path d="M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.52-.302 1.233.043 1.233.696v7.384c0 .653-.713.998-1.233.696L5 8.752V12a.5.5 0 0 1-1 0V4zm7.5.633L5.696 8l5.804 3.367V4.633z" />
                </svg>

                {play ?
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="controllers bi bi-pause-circle"
                        viewBox="0 0 16 16"
                        onClick={() => setPlay(false)}>
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z" />
                    </svg>

                    :
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="controllers bi bi-play-circle-fill"
                        viewBox="0 0 16 16"
                        onClick={() => setPlay(true)}>
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                    </svg>
                }

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="controllers bi bi-skip-end"
                    viewBox="0 0 16 16"
                    onClick={onNextClick}>
                    <path d="M12.5 4a.5.5 0 0 0-1 0v3.248L5.233 3.612C4.713 3.31 4 3.655 4 4.308v7.384c0 .653.713.998 1.233.696L11.5 8.752V12a.5.5 0 0 0 1 0V4zM5 4.633 10.804 8 5 11.367V4.633z" />
                </svg>

                <input
                    type="range"
                    value={trackProgress}
                    step="1"
                    min="0"
                    max={duration ? duration : `${duration}`}
                    className="progress"
                    onChange={(e) => onScrub(e.target.value)}
                    onMouseUp={onScrubEnd}
                    onKeyUp={onScrubEnd}
                />




            </div>
            {/* <audio src={ track[i]?.src} controls></audio> */}



        </div>
    )
}
export default AudioControllers