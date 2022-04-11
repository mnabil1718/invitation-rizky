import Image from 'next/image'
import PaperTexture from '../public/png/paper1.png'
import TitleText from '../public/webp/title-showcase.webp'

export default function Showcase() {
    return (
        <section id='showcase' className='relative'>
            <Image src={PaperTexture} alt="paper texture" layout='fill' placeholder='blur' objectFit='cover' />
            <div className="max-w-screen-sm mx-auto relative h-28">
                <div className="absolute top-14 left-28">
                    <Image className='drop-shadow-md' src="/png/bird.png" alt="bird" width={56} height={56} />
                </div>
                <div className="absolute -top-6 left-0">
                    <Image src="/svg/birdtrail.svg" alt="Dashed line" width={169} height={117} />
                </div>
                <div className="absolute right-9">
                    <Image className='drop-shadow-md' src="/png/cloud3.png" alt="cloud" width={97} height={97} />
                </div>
            </div>
            <div className="max-w-screen-sm relative text-center mx-auto">
                <div className="absolute z-10 left-0 top-14">
                    <Image className='drop-shadow-md' src="/png/cloud.png" alt="cloud" width={98} height={50} />
                </div>
                <div className="absolute z-10 -right-14 top-16">
                    <Image className='drop-shadow-md' src="/png/cloud2.png" alt="cloud" width={143} height={116} />
                </div>
                <h2 className="subheadline mb-4">You are invited to</h2>
                <Image className='drop-shadow-md' src="/png/figure.png" alt="Muslim wedding" width={317} height={325.65} placeholder="blur" blurDataURL='/png/figure.png' priority />
                <p className='small tracking-6'>The wedding of</p>
                <div className="relative w-fit mx-auto">
                    <div className="z-10 absolute -top-5 -left-4">
                        <Image className='drop-shadow-md' src="/png/bird3.png" alt="bird" width={50} height={50} />
                    </div>
                    <Image src={TitleText} alt="Rizky dan Aisyah" placeholder='blur' blurDataURL='/png/title-showcase.png' />
                </div>
                <div className="flex items-center justify-center space-x-3">
                    <div className='bg-dark h-0.25 w-12'></div>
                    <h3 className='font-alice text-xl text-dark'>Sabtu, 14 Mei 2022</h3>
                    <div className='bg-dark h-0.25 w-12'></div>
                </div>
            </div>
            <div className="max-w-screen-sm mx-auto overflow-y-clip relative h-28">
                <div className="absolute bottom-8 -left-10">
                    <Image className='drop-shadow-md' src="/png/cloud3.png" alt="cloud" width={97} height={97} />
                </div>
                <div className="absolute z-10 bottom-12 right-28">
                    <Image className='drop-shadow-md' src="/png/bird2.png" alt="bird" width={56} height={56} />
                </div>
                <div className="absolute -bottom-9 right-5">
                    <Image src="/svg/birdtrail2.svg" alt="dashed line" width={121.36} height={108} />
                </div>
            </div>
        </section>
    )
}
