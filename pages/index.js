import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Showcase from '../components/Showcase'
import Ayat from '../components/Ayat'
import Couple from '../components/Couple'
import Event from '../components/Event'
import Closing from '../components/Closing'
import SoundButton from '../components/SoundButton'

export default function Home() {

  return (
    <div className="font-lora text-dark overflow-hidden">
      <SoundButton />
      <Navbar />
      <Showcase />
      <Ayat />
      <Couple />
      <Event />
      <Closing />
    </div>

  )
}
