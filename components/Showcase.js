import Image from 'next/image'
import { motion } from 'framer-motion'
import { showcaseVariants, closingVariants } from '../helper/variants'
// import PaperTexture from '../public/webp/paper1.webp'

export default function Showcase() {
    return (
        <section id='showcase' className='relative bg-dark-neutral'>
            {/* <Image src={PaperTexture} alt="paper texture" layout='fill' placeholder='blur' objectFit='cover' /> */}
            <div className="max-w-screen-sm mx-auto relative h-28">
                <motion.div variants={showcaseVariants.fade} initial="initial" whileInView="animate" className="absolute top-14 left-28">
                    <motion.div variants={closingVariants.wiggle}>
                        <Image className='drop-shadow-md' src="/webp/bird.webp" alt="bird" width={56} height={56} />
                    </motion.div>
                </motion.div>
                <motion.div variants={showcaseVariants.fade} initial="initial" whileInView="animate" className="absolute -top-20 left-0">
                    <Image src="/webp/birdtrail.webp" alt="Dashed line" width={216 / 2} height={325 / 2} />
                </motion.div>
                <motion.div variants={showcaseVariants.ornamentRight} initial="initial" whileInView="animate" className="absolute right-9">
                    <Image className='drop-shadow-md' src="/webp/cloud3.webp" alt="cloud" width={97} height={97} />
                </motion.div>
            </div>
            <div className="max-w-screen-sm relative text-center mx-auto">
                <motion.div variants={showcaseVariants.ornamentLeft} initial="initial" whileInView="animate" className="absolute z-10 left-0 top-14">
                    <Image className='drop-shadow-md' src="/webp/cloud.webp" alt="cloud" width={98} height={50} />
                </motion.div>
                <motion.div variants={showcaseVariants.ornamentRight} initial="initial" whileInView="animate" className="absolute z-10 -right-14 top-16">

                    <Image className='drop-shadow-md' src="/webp/cloud2.webp" alt="cloud" width={143} height={116} />

                </motion.div>
                <motion.div variants={showcaseVariants.invitedVariants} initial="initial" whileInView="animate">

                    <motion.h2 variants={showcaseVariants.invitedChildrenVariants} className="subheadline mb-4">You are invited to</motion.h2>

                    <motion.div variants={showcaseVariants.invitedChildrenVariants}>
                        <Image className='drop-shadow-md' src="/webp/figure.webp" alt="Muslim wedding" width={317} height={325.65} placeholder="blur" blurDataURL='/webp/figure.webp' priority />
                    </motion.div>
                    <motion.p variants={showcaseVariants.invitedChildrenVariants} className='small tracking-6'>The wedding of</motion.p>
                    <div className="relative w-fit mx-auto">
                        <motion.div variants={showcaseVariants.fade} initial="initial" whileInView="animate" className="z-10 absolute -top-7 -left-4">
                            <motion.div variants={closingVariants.wiggle2}>
                                <Image className='drop-shadow-md' src="/webp/bird3.webp" alt="bird" width={50} height={50} />
                            </motion.div>
                        </motion.div>
                        <div>
                            <motion.h1 variants={showcaseVariants.invitedChildrenVariants} className='title mt-2'>Rizky & Aisyah</motion.h1>
                        </div>
                    </div>
                    <motion.div variants={showcaseVariants.invitedChildrenVariants} className="flex items-center justify-center space-x-3">
                        <motion.div variants={showcaseVariants.line} initial="initial" whileInView="animate" className='bg-dark h-0.25 w-12'></motion.div>
                        <h3 className='font-alice text-xl text-dark'>Syawal 1443 H / Mei 2022</h3>
                        <motion.div variants={showcaseVariants.line} initial="initial" whileInView="animate" className='bg-dark h-0.25 w-12'></motion.div>
                    </motion.div>
                </motion.div>
            </div>
            <div className="max-w-screen-sm mx-auto relative h-28">
                <motion.div variants={showcaseVariants.ornamentLeft} initial="initial" whileInView="animate" className="absolute bottom-8 -left-10">
                    <Image className='drop-shadow-md' src="/webp/cloud3.webp" alt="cloud" width={97} height={97} />
                </motion.div>
                <motion.div variants={showcaseVariants.fade} initial="initial" whileInView="animate" className="absolute z-10 bottom-12 right-28">
                    <motion.div variants={closingVariants.wiggle3}>
                        <Image className='drop-shadow-md' src="/webp/bird2.webp" alt="bird" width={56} height={56} />
                    </motion.div>
                </motion.div>
                <motion.div variants={showcaseVariants.fade} initial="initial" whileInView="animate" className="absolute -bottom-9 right-5">
                    <Image src="/webp/birdtrail2.webp" alt="dashed line" width={121.36} height={108} />
                </motion.div>
            </div>
        </section >
    )
}
