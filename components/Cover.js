import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ArcText from './ArcText'
import { coverVariants } from '../helper/variants'
import NightTexture from '../public/webp/night-texture.webp'
import Window from '../public/webp/cover2.webp'

export default function Cover({ openHandler }) {
    const { query, isReady } = useRouter()

    // Supposed to check if router hook is ready
    // But in this case, it works to delay
    // reading query string a bit
    // So the animation would run properly
    if (!isReady) {
        return (
            <section className='fixed z-40 w-full h-screen bg-dark overflow-hidden'>
            </section>
        )
    }
    const { to } = query
    const invite = !to ? "Tamu Undangan" : to
    const splitInvite = invite.split(" ").map((word, index) => {
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
                                <motion.span className='inline-block' variants={coverVariants.inviteChildrenVariants}>
                                    {char}
                                </motion.span>
                            </span>
                        )
                    })
                }
            </span>
        )
    })
    // const splitKeluarga = "& Keluarga".replace(/\s/g, "\u00A0").split("").map((char, index) => {
    //     return (
    //         <span className='inline-block overflow-hidden' key={index}>
    //             <motion.span className='inline-block' variants={coverVariants.inviteChildrenVariants}>
    //                 {char}
    //             </motion.span>
    //         </span>
    //     )
    // })

    return (
        <>
            <motion.section variants={coverVariants.bgVariants} exit='exit' className='fixed z-40 w-full h-screen bg-darker overflow-hidden'>
                <Image src={NightTexture} alt="paint texture" placeholder='blur' layout='fill' objectFit='cover' />
                <div className="relative z-10 max-w-screen-sm h-full mx-auto flex flex-col justify-end text-center">
                    <motion.div variants={coverVariants.curvedVariants} initial="initial" animate="animate" style={{ marginLeft: '-110px' }} className='absolute top-20 left-1/2'>
                        <Image src='/svg/curved.svg' alt="Rizky & Aisyah" placeholder='blur' blurDataURL='/svg/curved.svg' width={220} height={70} />
                    </motion.div>
                    <div className='relative mx-auto w-fit h-fit mb-7'>
                        <motion.div variants={coverVariants.titleVariants} initial="initial" animate="animate" style={{ top: '35px', left: '50%', marginLeft: '-57px' }} className='absolute z-10 flex items-center space-x-1'>
                            <motion.h1 variants={coverVariants.titleChildrenVariants} style={{ fontSize: '132px' }} className='font-lemon text-neutral'>R</motion.h1>
                            <motion.h1 variants={coverVariants.titleChildrenVariants} style={{ fontSize: '76px' }} className='font-lemon text-neutral'>&</motion.h1>
                            <motion.h1 variants={coverVariants.titleChildrenVariants} style={{ fontSize: '132px' }} className='font-lemon text-neutral'>A</motion.h1>
                        </motion.div>
                        <Image src={Window} alt="flower on window" placeholder='blur' width={212.8} height={308} priority />
                    </div>
                    <motion.p variants={coverVariants.sentence} initial="initial" animate="animate" className="text-body text-neutral mb-3">{
                        "Yth.".split("").map((singleText, index) => {
                            return (<motion.span variants={coverVariants.letter} key={index}>{singleText}</motion.span>)
                        })
                    }</motion.p>
                    <motion.div variants={coverVariants.inviteVariants} initial="initial" animate="animate" className="font-alice text-4xl text-neutral mb-7">{splitInvite}</motion.div>
                    <motion.button variants={coverVariants.buttonVariants} initial="initial" animate="animate" className='outline-button-light mb-24 w-fit mx-auto' onClick={() => openHandler()}>Buka Undangan</motion.button>
                </div>
            </motion.section >
        </>
    )
}
