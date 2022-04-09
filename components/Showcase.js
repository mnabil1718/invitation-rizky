import Image from 'next/image'

export default function Showcase() {
    return (
        <section id='showcase' style={{ backgroundImage: 'url("/png/paper1.png")' }}>
            <div className="max-w-screen-sm mx-auto relative h-28">
                <div className="absolute top-14 left-28">
                    <Image className='drop-shadow-md' src="/svg/bird.svg" alt="bird" width={56} height={56} />
                </div>
                <div className="absolute -top-6 left-0">
                    <Image src="/svg/birdtrail.svg" alt="Dashed line" width={169} height={117} />
                </div>
                <div className="absolute right-9">
                    <Image className='drop-shadow-md' src="/png/cloud3.png" alt="cloud" width={97} height={97} />
                </div>
            </div>
            <div className="max-w-screen-sm relative text-center mx-auto overflow-hidden break-750:overflow-visible">
                <div className="absolute z-10 left-0 top-14">
                    <Image className='drop-shadow-md' src="/png/cloud.png" alt="cloud" width={98} height={98} />
                </div>
                <div className="absolute z-10 -right-14 top-16 transform -scale-x-100">
                    <Image className='drop-shadow-md' src="/png/cloud2.png" alt="cloud" width={143} height={143} />
                </div>
                <h2 className="subheadline mb-4">You are invited to</h2>
                <Image className='drop-shadow-md' src="/svg/figure.svg" alt="Muslim wedding" width={317} height={340} priority />
                <p className='small tracking-6'>The wedding of</p>
                <div className="relative w-fit mx-auto">
                    <div className="z-10 absolute -top-5 -left-4">
                        <Image className='drop-shadow-md' src="/svg/bird3.svg" alt="bird" width={50} height={50} />
                    </div>
                    <Image src='/svg/title.svg' alt="Rizky dan Aisyah" width={291} height={86} />
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
                    <Image className='drop-shadow-md' src="/svg/bird2.svg" alt="bird" width={56} height={56} />
                </div>
                <div className="absolute -bottom-9 right-5">
                    <Image src="/svg/birdtrail2.svg" alt="dashed line" width={121.36} height={108} />
                </div>
            </div>
        </section>
    )
}
