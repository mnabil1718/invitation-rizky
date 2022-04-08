import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NightScenery from '../public/png/night-scenery.png'

export default function Ayat() {
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const target = new Date('2022-04-21T08:00:00Z')
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
        <section style={{ backgroundImage: 'url("/png/night-texture.png")' }} className="w-full relative overflow-y-hidden text-neutral">
            <div className="max-w-screen-sm relative text-center mx-auto pt-12 pb-96 z-20">
                <p className='body text-center px-3 mb-7'>&quot;Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda kebesaran Allah bagi kaum yang berpikir.&quot;</p>
                <div className="flex items-center justify-center space-x-5 mb-8">
                    <div className='bg-neutral h-0.25 w-32'></div>
                    <h3 className='body neutral'>Q.S Ar-Rum: 21</h3>
                    <div className='bg-neutral h-0.25 w-32'></div>
                </div>
                <div className="mx-auto w-fit flex space-x-5 mb-5">
                    <div>
                        <h1 className="title">{days < 0 ? 0 : days}</h1>
                        <p className="body">Hari</p>
                    </div>
                    <h1 className="title">:</h1>
                    <div>
                        <h1 className="title">{hours < 0 ? 0 : hours}</h1>
                        <p className="body">Jam</p>
                    </div>
                    <h1 className="title">:</h1>
                    <div>
                        <h1 className="title">{minutes < 0 ? 0 : minutes}</h1>
                        <p className="body">Menit</p>
                    </div>
                    <h1 className="title">:</h1>
                    <div>
                        <h1 className="title">{seconds < 0 ? 0 : seconds}</h1>
                        <p className="body">detik</p>
                    </div>
                </div>
                <Link href="https://calendar.google.com/event?action=TEMPLATE&tmeid=NTVycHUxcjRtb21hZ2Nocmw0ZWVzMHNlNGsgY3VjaWJhanUxMjNAbQ&tmsrc=cucibaju123%40gmail.com"><a target="_blank"><button className='outline-button'>Simpan Tanggal</button></a></Link>
            </div>
            <div className='absolute bottom-0 sm:-bottom-32 md:-bottom-64 lg:-bottom-96 xl:-bottom-3/4'>
                <Image src={NightScenery} alt="night scenery" placeholder='blur' objectFit='cover' objectPosition='0 0%' />
            </div>
        </section>
    )
}
