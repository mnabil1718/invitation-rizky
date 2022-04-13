import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import Showcase from '../components/Showcase'
import Ayat from '../components/Ayat'
import Couple from '../components/Couple'
import Event from '../components/Event'
import Closing from '../components/Closing'
import SoundButton from '../components/SoundButton'
import Cover from '../components/Cover'

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isOpen, setIsOpen] = useState(true)

  const playPauseHandler = () => {
    setIsPlaying(!isPlaying)
  }
  const openInvitation = () => {
    setIsOpen(false)
    playPauseHandler()
  }

  return (
    <div className="font-lora text-dark overflow-hidden">
      <AnimatePresence exitBeforeEnter>
        {isOpen ?
          (
            <div key="cover">
              <Cover openHandler={openInvitation} />
            </div>
          ) :
          (<div key="content">
            <SoundButton isPlaying={isPlaying} playPauseHandler={playPauseHandler} />
            <Navbar />
            <Showcase />
            <Ayat />
            <Couple />
            <Event />
            <Closing />
          </div>)}
      </AnimatePresence>


    </div>

  )
}
