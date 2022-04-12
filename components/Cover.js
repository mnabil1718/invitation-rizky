import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import NightTexture from '../public/png/night-texture.png'
import Window from '../public/png/cover.png'


export default function Cover({ openHandler }) {
    return (
        <motion.section exit={{ y: -1000 }} className='fixed z-40 w-full h-screen bg-dark overflow-y-hidden overflow-x-hidden'>
            <Image src={NightTexture} alt="paint texture" placeholder='blur' layout='fill' objectFit='cover' />
            <div className="relative z-10 max-w-screen-sm h-full mx-auto flex flex-col justify-end text-center">
                <div className='relative mx-auto w-fit h-fit mb-16'>
                    <div style={{ top: '55px', left: '50%', marginLeft: '-57px' }} className='flex absolute z-10 items-center space-x-1'>
                        <h1 style={{ fontSize: '132px' }} className='font-lemon text-neutral'>R</h1>
                        <h1 style={{ fontSize: '76px' }} className='font-lemon text-neutral'>&</h1>
                        <h1 style={{ fontSize: '132px' }} className='font-lemon text-neutral'>A</h1>
                    </div>
                    <Image src={Window} alt="flower on window" placeholder='blur' width={456} height={308} />
                </div>
                <p className="text-body text-neutral mb-3">Kepada Yth.</p>
                <h2 className="font-alice text-4xl text-neutral mb-16">Lalu Rizky <br />& Keluarga</h2>
                <div>
                    <button className='outline-button-light mb-8' onClick={() => openHandler()}>Buka Undangan</button>
                </div>
            </div>
        </motion.section >
    )
}
