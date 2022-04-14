import Image from 'next/image'
import { motion } from 'framer-motion'
import Parallax from '../components/Parallax'
import { showcaseVariants } from '../helper/variants'
import PaperTexture from '../public/webp/paper1.webp'
import TitleText from '../public/webp/title-showcase.webp'

export default function Showcase() {
    return (
        <section className='relative'>
            <Image src={PaperTexture} alt="paper texture" layout='fill' placeholder='blur' objectFit='cover' />
            <div className="max-w-screen-sm mx-auto relative h-28">
                <div className="absolute top-14 left-28">
                    <Image className='drop-shadow-md' src="/webp/bird.webp" alt="bird" width={56} height={56} />
                </div>
                <div className="absolute -top-20 left-0">
                    <Image src="/webp/birdtrail.webp" alt="Dashed line" width={216 / 2} height={325 / 2} />
                </div>
                <div className="absolute right-9">
                    <Image className='drop-shadow-md' src="/webp/cloud3.webp" alt="cloud" width={97} height={97} />
                </div>
            </div>
            <div className="max-w-screen-sm relative text-center mx-auto">
                <div className="absolute z-10 left-0 top-14">
                    <Parallax inView={[0, 0.07]} position={[0, -60]}>
                        <Image className='drop-shadow-md' src="/webp/cloud.webp" alt="cloud" width={98} height={50} />
                    </Parallax>
                </div>
                <div className="absolute z-10 -right-14 top-16">
                    <Parallax inView={[0, 0.07]} position={[30, -130]}>
                        <Image className='drop-shadow-md' src="/webp/cloud2.webp" alt="cloud" width={143} height={116} />
                    </Parallax>
                </div>
                <div>
                    <Parallax inView={[0, 0.07]} position={[0, -150]}>
                        <h2 className="subheadline mb-4">You are invited to</h2>
                    </Parallax>
                    <Parallax inView={[0, 0.07]} position={[0, -120]}>
                        <Image className='drop-shadow-md' src="/webp/figure.webp" alt="Muslim wedding" width={317} height={325.65} placeholder="blur" blurDataURL='/webp/figure.webp' priority />
                    </Parallax>
                    <Parallax inView={[0, 0.07]} position={[0, -60]}>
                        <p className='small tracking-6'>The wedding of</p>
                        <div className="relative w-fit mx-auto">
                            <div className="z-10 absolute -top-7 -left-4">
                                <Image className='drop-shadow-md' src="/webp/bird3.webp" alt="bird" width={50} height={50} />
                            </div>
                            <div>
                                <h1 className='title mt-2'>Rizky & Aisyah</h1>
                            </div>
                        </div>
                        <div className="flex items-center justify-center space-x-3">
                            <div className='bg-dark h-0.25 w-12'></div>
                            <h3 className='font-alice text-xl text-dark'>Sabtu, 14 Mei 2022</h3>
                            <div className='bg-dark h-0.25 w-12'></div>
                        </div>
                    </Parallax>
                </div>
            </div>
            <div className="max-w-screen-sm mx-auto relative h-28">
                <div className="absolute bottom-8 -left-10">
                    <Parallax inView={[0, 0.07]} position={[0, -40]}>
                        <Image className='drop-shadow-md' src="/webp/cloud3.webp" alt="cloud" width={97} height={97} />
                    </Parallax>
                </div>
                <div className="absolute z-10 bottom-12 right-28">
                    <Parallax inView={[0, 0.07]} position={[0, -50]}>
                        <Image className='drop-shadow-md' src="/webp/bird2.webp" alt="bird" width={56} height={56} />
                    </Parallax>
                </div>
                <div className="absolute -bottom-9 right-5">
                    <Parallax inView={[0, 0.07]} position={[0, -50]}>
                        <Image src="/webp/birdtrail2.webp" alt="dashed line" width={121.36} height={108} />
                    </Parallax>
                </div>
            </div>
        </section >
    )
}
