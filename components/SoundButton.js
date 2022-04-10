import { useState, useRef } from "react"
import ReactHowler from "react-howler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPause,
    faPlay,

} from "@fortawesome/free-solid-svg-icons";
import BgSound from "../public/audio/bg-sound.mp3"

export default function SoundButton() {
    const [isPlaying, setIsPlaying] = useState(false)
    const playPauseHandler = () => {
        setIsPlaying(!isPlaying)
    }

    return (
        <div className="fixed z-30 top-5 right-5">
            <ReactHowler playing={isPlaying} src={BgSound} loop />
            <button className="w-16 h-16 rounded-full bg-white/70 backdrop-blur-md drop-shadow-xl" onClick={() => playPauseHandler()}>{isPlaying ? (<FontAwesomeIcon icon={faPause} size='2x' />) : (<FontAwesomeIcon icon={faPlay} size='2x' />)}</button>
        </div>
    )
}
