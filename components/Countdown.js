import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ayatVariants } from '../helper/variants'

export default function Countdown({ url, date }) {
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const target = new Date(date)
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
    }, [date])

    return (
        <>
            <motion.div variants={ayatVariants.countParent} initial="initial" whileInView="animate" viewport={{ once: true }} className="w-96 mx-auto flex justify-center space-x-5 mb-5">
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
            <Link href={url}><a target="_blank"><motion.button variants={ayatVariants.buttonVariants} initial="initial" whileInView="animate" viewport={{ once: true }} className='outline-button'>Simpan Tanggal</motion.button></a></Link>
        </>
    )
}
