import ReactHowler from "react-howler"
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faPause,
    faPlay,

} from "@fortawesome/free-solid-svg-icons"
import BgSound from "../public/audio/bg-sound.mp3"


export default function SoundButton({ playPauseHandler, isPlaying }) {


    return (
        <motion.div initial={{ x: 100, rotate: 180 }} animate={{ x: 0, rotate: 0 }} transition={{ duration: 0.6, type: 'spring', delay: 0.5 }} className="fixed z-30 top-5 right-5">
            <ReactHowler playing={isPlaying} src={BgSound} loop />
            <button className="w-12 h-12 rounded-full bg-white/70 backdrop-blur-md drop-shadow-xl" onClick={() => playPauseHandler()}>{isPlaying ? (<FontAwesomeIcon style={{ fontSize: '1.2em' }} icon={faPause} />) : (<FontAwesomeIcon style={{ fontSize: '1.2em' }} icon={faPlay} />)}</button>
        </motion.div>
    )
}
