import Image from 'next/image'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { coupleVariants } from '../helper/variants'
import Parallax from './Parallax'
import PaperTexture from '../public/png/paper1.png'

export default function Couple() {
    return (
        <section className="w-full relative text-dark">
            <Image src={PaperTexture} alt="paper texture" layout='fill' placeholder='blur' objectFit='cover' priority />
            <Parallax inView={[0.3, 0.4]} position={[10, -90]}>
                <div className='w-full z-10 h-48 absolute -top-24 left-0'>
                    <Image src='/svg/paper-rip.svg' alt="paper rip" layout='fill' />
                </div>
            </Parallax>
            <div className="max-w-screen-sm relative text-center mx-auto z-20 pt-12">
                <p className='body text-center px-3 mb-7'>Dengan memohon Ridha Allah dan Barakah-Nya,
                    Kami bermaksud memohon do&apos;a serta mengundang Bapak/Ibu/Saudara/i pada penyelenggaraan pernikahan kami
                </p>
                <div className="relative pt-20 mb-7">
                    <div className='absolute z-40 -top-5 left-32 sm:left-48'>
                        <Parallax inView={[0.2, 0.5]} position={[100, -100]}>
                            <Image className='drop-shadow-md' src='/png/airplane2.png' alt='paper airplane' width={87} height={87} />
                        </Parallax>
                    </div>
                    <div className='transform rotate-3'>
                        <Parallax inView={[0.2, 0.5]} position={[50, -50]}>
                            <Image className='drop-shadow-md' src='/webp/photo-frame.webp' alt='photo' width={198.69} height={232} placeholder="blur" blurDataURL='/webp/photo-frame.webp' />
                        </Parallax>
                    </div>
                </div>
                <div data-scroll-section>
                    <h3 className='subheadline-small mb-2' data-scroll data-scroll-speed="3">Lalu Rizky Adriansyah, S.E.</h3>
                </div>
                <p className="body">Putra dari Bpk. Lalu Supardi, S.H. & Ibu Fitriani</p>
                <div style={{ top: '600px' }} className='absolute right-10 sm:right-32 z-10'>
                    <Parallax inView={[0.2, 0.5]} position={[150, -150]}>
                        <Image className='drop-shadow-md' src='/png/camera.png' alt='camera' width={105} height={105} />
                    </Parallax>
                </div>
                <motion.div initial={{ pathLength: 0 }} whileInView={{ pathLength: 100 }} className='my-12'>
                    <Image src='/svg/love-line.svg' alt='line' width={1440} height={266} />
                </motion.div>
                <div className="relative mb-7">
                    <div className='absolute z-10 top-32 right-10 sm:right-44'>
                        <Parallax inView={[0.3, 0.6]} position={[100, -100]}>
                            <Image className='drop-shadow-md' src='/png/airplane.png' alt='paper airplane' width={87} height={87} />
                        </Parallax>
                    </div>
                    <div className='transform -rotate-3'>
                        <Parallax inView={[0.3, 0.6]} position={[50, -50]}>
                            <Image className='drop-shadow-md' src='/webp/photo-frame2.webp' alt='photo' width={198.69} height={232} placeholder="blur" blurDataURL='/webp/photo-frame2.webp' />
                        </Parallax>
                    </div>
                </div>
                <h3 className='subheadline-small'>Aisyah As-Salafiyah, S.H.</h3>
                <p className="body">Putri dari Bpk. Dr. Abdurrahman Misno B. P. & Ibu Mulyani</p>
                <div className="relative -left-36 sm:-left-52 -top-4">
                    <Parallax inView={[0.4, 0.7]} position={[30, -30]}>
                        <Image className='drop-shadow-md' src='/png/book.png' alt='book' width={175} height={175} />
                    </Parallax>
                </div>
            </div>
            <div className='w-full z-10 h-48 absolute -bottom-24 left-0 transform rotate-180'>
                <Image src='/svg/paper-rip.svg' alt="paper rip" layout='fill' />
            </div>
        </section>
    )
}
