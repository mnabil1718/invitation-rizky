import { useEffect, useState, useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Parallax from './Parallax'
import { ayatVariants } from '../helper/variants'
import NightScenery from '../public/webp/night-scenery.webp'
import NightTexture from '../public/webp/night-texture.webp'

export default function Ayat() {
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


    const ayat = '"Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda kebesaran Allah bagi kaum yang berpikir."'
    const splitted = ayat.split(" ").map((word, index) => {
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
                            <span className='inline-block' key={index}>
                                <motion.span className='inline-block' variants={ayatVariants.letter}>
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
        <section className="w-full relative overflow-y-hidden text-neutral">
            <Image src={NightTexture} alt="paint texture" placeholder='blur' layout='fill' objectFit='cover' />
            <div className="max-w-screen-sm relative text-center mx-auto pt-12 pb-96 z-20">
                <Parallax inView={[0.1, 0.27]} position={[20, -200]}>
                    <motion.div variants={ayatVariants.sentence} initial="initial" whileInView="animate" viewport={{ once: true }} className='body text-center px-3 mb-4'>
                        <em>{splitted}</em>
                    </motion.div>
                </Parallax>
                <Parallax inView={[0.1, 0.27]} position={[20, -150]}>
                    <div className="flex items-center justify-center space-x-5 mb-24">
                        <motion.h3 variants={ayatVariants.slideUp} initial="initial" whileInView="animate" viewport={{ once: true }} className='body neutral'>(Q.S. Ar-Rum: 21)</motion.h3>
                    </div>
                </Parallax>
                <Parallax inView={[0.1, 0.27]} position={[20, -100]}>
                    <motion.div variants={ayatVariants.sentence} initial="initial" whileInView="animate" viewport={{ once: true }} className='body text-center px-3 mb-4'>
                        <em>Cinta bukan mengajar kita lemah, tetapi membangkitkan kekuatan.
                            Cinta bukan mengajar kita menghinakan diri, tetapi menghembuskan kegagahan.</em>
                    </motion.div>
                </Parallax>
                <Parallax inView={[0.1, 0.27]} position={[20, -50]}>
                    <div className="flex items-center justify-center space-x-1 mb-8">
                        <motion.div variants={ayatVariants.line} initial="initial" whileInView="animate" viewport={{ once: true }} className='bg-neutral h-0.25 w-7'></motion.div>
                        <motion.h3 variants={ayatVariants.slideUp} initial="initial" whileInView="animate" viewport={{ once: true }} className='body neutral'>Buya Hamka</motion.h3>
                        <motion.div variants={ayatVariants.line} initial="initial" whileInView="animate" viewport={{ once: true }} className='bg-neutral h-0.25 w-7'></motion.div>
                    </div>
                </Parallax>
                {/* <Parallax inView={[0.1, 0.27]} position={[20, -50]}>
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
                </Parallax> */}
                {/* <Parallax inView={[0.1, 0.27]} position={[20, -30]}>
                    <Link href="https://calendar.google.com/event?action=TEMPLATE&tmeid=MnJkbTFhNzk3bnZlbTI2bG1waTgwbDJ1dnQgY3VjaWJhanUxMjNAbQ&tmsrc=cucibaju123%40gmail.com"><a target="_blank"><motion.button variants={ayatVariants.buttonVariants} initial="initial" whileInView="animate" viewport={{ once: true }} className='outline-button'>Simpan Tanggal</motion.button></a></Link>
                </Parallax> */}
            </div>
            <div className="absolute w-full bottom-0 sm:-bottom-32 md:-bottom-64 lg:-bottom-96 xl:-bottom-3/4">
                <Parallax inView={[0.1, 0.3]} position={[100, -8]}>
                    <Image src={NightScenery} alt="night scenery" layout='responsive' objectFit='cover' placeholder='blur' />
                </Parallax>
            </div>
        </section>
    )
}
