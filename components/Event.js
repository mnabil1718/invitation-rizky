import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { eventVariants, ayatVariants } from '../helper/variants'
import Parallax from './Parallax'
import WallTexture from '../public/webp/wall-texture.webp'
import Window from '../public/webp/window.webp'

export default function Event() {
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const target = new Date('2022-05-14T08:00:00Z')
        const interval = setInterval(() => {
            const now = new Date()
            const difference = target.getTime() - now.getTime()

            const d = Math.floor(difference / (1000 * 60 * 60 * 24))
            setDays(d)
            const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            setHours(h)
            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
            setMinutes(m)
            const s = Math.floor((difference % (1000 * 60)) / 1000)
            setSeconds(s)
        }, 1000);

        return () => clearInterval(interval)
    }, [])


    return (
        <section id='event' className="relative text-neutral">
            <Image src={WallTexture} alt="paint texture" placeholder='blur' layout='fill' objectFit='cover' objectPosition="0% 100%" />
            <div className="relative max-w-screen-xl mx-auto flex flex-col px-20 lg:px-0 lg:flex-row justify-center items-center pb-24 pt-16 md:pt-28 lg:pt-36 space-x-0 space-y-10 lg:space-y-0">
                <motion.div variants={eventVariants.parent} initial="initial" whileInView="animate" viewport={{ once: true }} className='text-center lg:basis-1/4'>
                    <motion.h1 variants={eventVariants.children} className='title mb-5'>Akad Nikah</motion.h1>
                    <motion.h2 variants={eventVariants.children} className='subheadline'>Sabtu, 14 Mei 2022</motion.h2>
                    <motion.p variants={eventVariants.children} className="body">Pukul 08.00 - 10.00 WITA (Laki-laki)</motion.p>
                    <motion.p variants={eventVariants.children} className="body">Pukul 10.00 - 12.00 WITA (Perempuan)</motion.p>
                    <motion.div variants={eventVariants.childrenLine} className="h-0.25 bg-neutral w-20 mx-auto my-5"></motion.div>
                    <motion.p variants={eventVariants.children} className="body mb-5">Jl. dr. Soetomo, Gg. Setia Kawan, Lingk. Karang Baru Selatan, Kota Mataram - Nusa Tenggara Barat</motion.p>
                    <Link href="https://www.instagram.com/lr_adriansyah/"><a target="_blank"><motion.button variants={eventVariants.children} className='outline-button'>Live Instagram</motion.button></a></Link>
                </motion.div>
                <div className='lg:basis-2/4 text-center'>
                    <Image src={Window} alt='window' width={250} height={250} placeholder='blur' />
                </div>
                <motion.div variants={eventVariants.parent} initial="initial" whileInView="animate" viewport={{ once: true }} className='text-center lg:basis-1/4'>
                    <motion.h1 variants={eventVariants.children} className='title mb-5'>Walimatul Ursy</motion.h1>
                    <motion.h2 variants={eventVariants.children} className='subheadline'>Ahad, 29 Mei 2022</motion.h2>
                    <motion.p variants={eventVariants.children} className="body">Pukul 09.00 - 17.00 WIB</motion.p>
                    <motion.div variants={eventVariants.childrenLine} className="h-0.25 bg-neutral w-20 mx-auto my-5"></motion.div>
                    <motion.p variants={eventVariants.children} className="body">Amma Alamia <br />
                        Jl. Raya Pondok Bitung, Pasir Tengah, Sukaharja, Kec. Cijeruk, Kabupaten Bogor
                        <br />(Di Depan Ponpes Ibnu Taimiyah)
                    </motion.p>
                </motion.div>
            </div>
            <div className="relative max-screen-xl mx-auto p-5">
                <Parallax inView={[0.1, 0.27]} position={[20, -50]}>
                    <motion.div variants={ayatVariants.countParent} initial="initial" whileInView="animate" viewport={{ once: true }} className="mx-auto w-fit flex space-x-5 mb-5">
                        <motion.div variants={ayatVariants.count}>
                            <h1 className="title">{days < 0 ? 0 : days}</h1>
                            <p className="body">Hari</p>
                        </motion.div>
                        <motion.h1 variants={ayatVariants.count} className="title">:</motion.h1>
                        <motion.div variants={ayatVariants.count}>
                            <h1 className="title">{hours < 0 ? 0 : hours}</h1>
                            <p className="body">Jam</p>
                        </motion.div>
                        <motion.h1 variants={ayatVariants.count} className="title">:</motion.h1>
                        <motion.div variants={ayatVariants.count}>
                            <h1 className="title">{minutes < 0 ? 0 : minutes}</h1>
                            <p className="body">Menit</p>
                        </motion.div>
                        <motion.h1 variants={ayatVariants.count} className="title">:</motion.h1>
                        <motion.div variants={ayatVariants.count}>
                            <h1 className="title">{seconds < 0 ? 0 : seconds}</h1>
                            <p className="body">detik</p>
                        </motion.div>
                    </motion.div>
                </Parallax>
                <Parallax inView={[0.1, 0.27]} position={[20, -30]}>
                    <Link href="https://calendar.google.com/event?action=TEMPLATE&tmeid=MnJkbTFhNzk3bnZlbTI2bG1waTgwbDJ1dnQgY3VjaWJhanUxMjNAbQ&tmsrc=cucibaju123%40gmail.com"><a target="_blank"><motion.button variants={ayatVariants.buttonVariants} initial="initial" whileInView="animate" viewport={{ once: true }} className='outline-button'>Simpan Tanggal</motion.button></a></Link>
                </Parallax>
            </div>
            <div id='location' className="relative max-w-screen-xl mx-auto p-5">
                <h1 className="title mb-5 text-center">Lokasi Acara</h1>
                <div className='lg:flex space-y-10 lg:space-y-0 lg:space-x-10'>
                    <div className="flex flex-col w-full items-center">
                        <p className="subheadline mb-3">Lombok</p>
                        <iframe height={480} className='relative z-10 w-full rounded-xl' style={{ border: 0 }} loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/place?q=-8.568541%2C116.109356&key=AIzaSyB737Dw7OHUuvAbAtKloX8L-8TFVep3ZwI"></iframe>
                    </div>
                    <div className="flex flex-col w-full items-center">
                        <p className="subheadline mb-3">Bogor</p>
                        <iframe height={480} className='relative z-10 w-full rounded-xl' style={{ border: 0 }} loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/place?q=8QQ8%2BR6P%20AmmA%20AlamiA%2C%20Sukaharja%2C%20Cijeruk%2C%20Bogor%20Regency%2C%20West%20Java%2016740&key=AIzaSyB737Dw7OHUuvAbAtKloX8L-8TFVep3ZwI"></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}
