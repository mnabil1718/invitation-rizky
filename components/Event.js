import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { eventVariants, ayatVariants, coverVariants } from '../helper/variants'
import Parallax from './Parallax'
import Countdown from './Countdown'
import WallTexture from '../public/webp/wall-texture.webp'
import Window from '../public/webp/window.webp'

export default function Event() {

    const lokasi = "Lokasi Acara".split(" ").map((word, index) => {
        var split = word.split("")
        split.push("\u00A0")
        return (
            // Using wrapper span with whitespace-nowrap
            // to prevent word break instead, overflowing 
            // word will be pushed down
            <span key={index} className="whitespace-nowrap">
                {
                    split.map((char, index) => {
                        return (
                            <span className='inline-block overflow-hidden' key={index}>
                                <motion.span style={{ marginRight: '3px', marginLeft: '3px' }} className='inline-block' variants={eventVariants.letter}>
                                    {char}
                                </motion.span>
                            </span>
                        )
                    })
                }
            </span>
        )
    })
    return (
        <section id='event' className="relative text-neutral">
            <Image src={WallTexture} alt="paint texture" placeholder='blur' layout='fill' objectFit='cover' objectPosition="0% 100%" />
            <div className="relative max-w-screen-lg mx-auto flex flex-col px-20 lg:px-0 lg:flex-row justify-center items-center lg:items-start pb-24 pt-24 md:pt-28 lg:pt-48 space-x-0 space-y-10 lg:space-y-0">
                <motion.div variants={eventVariants.parent} initial="initial" whileInView="animate" viewport={{ once: true }} className='text-center lg:basis-5/12'>
                    <motion.h1 variants={eventVariants.children} className='title mb-5'>Akad Nikah</motion.h1>
                    <motion.h2 variants={eventVariants.children} className='subheadline'>Sabtu, 14 Mei 2022</motion.h2>
                    <motion.p variants={eventVariants.children} className="body">Pukul 08.00 - 10.00 WITA (Laki-laki)</motion.p>
                    <motion.p variants={eventVariants.children} className="body">Pukul 10.00 - 12.00 WITA (Perempuan)</motion.p>
                    <motion.div variants={eventVariants.childrenLine} className="h-0.25 bg-neutral w-20 mx-auto my-5"></motion.div>
                    <motion.p variants={eventVariants.children} className="body mb-5">Jl. dr. Soetomo, Gg. Setia Kawan, Lingk. Karang Baru Selatan, Kota Mataram - Nusa Tenggara Barat</motion.p>
                    <Link href="https://www.instagram.com/lr_adriansyah/"><a target="_blank"><motion.button variants={eventVariants.children} className='outline-button mb-14'>Live Instagram</motion.button></a></Link>
                    <motion.div variants={eventVariants.children}>
                        <Countdown date="Sat May 14 2022 08:00:00 GMT+0800" url="https://calendar.google.com/event?action=TEMPLATE&tmeid=MnB0aGxqdGYwbWgwZDNuOXJtZmo0Ym9vbjQgY3VjaWJhanUxMjNAbQ&tmsrc=cucibaju123%40gmail.com" />
                    </motion.div>
                </motion.div>
                <div className='text-center basis-6/12'>
                    <Image src={Window} alt='window' width={250} height={250} placeholder='blur' />
                </div>
                <motion.div variants={eventVariants.parent} initial="initial" whileInView="animate" viewport={{ once: true }} className='text-center lg:basis-5/12'>
                    <motion.h1 variants={eventVariants.children} className='title mb-5'>Walimatul Ursy</motion.h1>
                    <motion.h2 variants={eventVariants.children} className='subheadline'>Ahad, 29 Mei 2022</motion.h2>
                    <motion.p variants={eventVariants.children} className="body">Pukul 09.00 - 17.00 WIB</motion.p>
                    <motion.div variants={eventVariants.childrenLine} className="h-0.25 bg-neutral w-20 mx-auto my-5"></motion.div>
                    <motion.p variants={eventVariants.children} className="body mb-14">Amma Alamia <br />
                        Jl. Raya Pondok Bitung, Pasir Tengah, Sukaharja, Kec. Cijeruk, Kabupaten Bogor
                        <br />(Di Depan Ponpes Ibnu Taimiyah)
                    </motion.p>
                    <motion.div variants={eventVariants.children}>
                        <Countdown date="Sun May 29 2022 09:00:00 GMT+0700" url="https://calendar.google.com/event?action=TEMPLATE&tmeid=NjRhZXRhanByNzE2Z29pN3YycGpmYjJnM3MgY3VjaWJhanUxMjNAbQ&tmsrc=cucibaju123%40gmail.com" />
                    </motion.div>
                </motion.div>
            </div>
            <div id='location' className="relative max-w-screen-xl mx-auto p-5">
                <motion.h1 variants={eventVariants.sentence} initial="initial" whileInView="animate" viewport={{ once: true }} className="title mb-5 text-center">{lokasi}</motion.h1>
                <div className='flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8'>
                    <motion.div variants={eventVariants.slideParent} initial="initial" whileInView="animate" viewport={{ once: true }} className="flex flex-col w-full items-center">
                        <motion.p variants={eventVariants.slideRight} className="subheadline mb-3">Lombok</motion.p>
                        <motion.iframe variants={eventVariants.slideRight} height={480} className='relative z-10 w-full rounded-xl' style={{ border: 0 }} loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/place?q=-8.568107%2C%20116.109150&key=AIzaSyB737Dw7OHUuvAbAtKloX8L-8TFVep3ZwI"></motion.iframe>
                    </motion.div>
                    <motion.div variants={eventVariants.slideParent} initial="initial" whileInView="animate" viewport={{ once: true }} className="flex flex-col w-full items-center">
                        <motion.p variants={eventVariants.slideLeft} className="subheadline mb-3">Bogor</motion.p>
                        <motion.iframe variants={eventVariants.slideLeft} height={480} className='relative z-10 w-full rounded-xl' style={{ border: 0 }} loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/place?q=8QQ8%2BR6P%20AmmA%20AlamiA%2C%20Sukaharja%2C%20Cijeruk%2C%20Bogor%20Regency%2C%20West%20Java%2016740&key=AIzaSyB737Dw7OHUuvAbAtKloX8L-8TFVep3ZwI"></motion.iframe>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
