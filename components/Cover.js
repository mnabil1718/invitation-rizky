import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import Image from 'next/image'
import NightTexture from '../public/png/night-texture.png'
import Window from '../public/png/cover.png'

const variants = {
    exit: {
        y: -1000,
        transition: {
            duration: 0.5,
            ease: 'easeInOut',
        }

    }
}

const titleVariants = {
    initial: {
        opacity: 0,
        y: 10,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: 'easeOut',
            staggerChildren: 0.2,
        }
    }
}

const titleChildrenVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.7,
            ease: 'easeInOut',
        }
    }
}

const sentence = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delayChildren: 1,
            staggerChildren: 0.08,
        }
    }
}

const letter = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
    }
}

const inviteVariants = {
    initial: {
        y: 0,
    },
    animate: {
        y: 0,
        transition: {
            ease: 'easeOut',
            delayChildren: 1.3,
            staggerChildren: 0.01,
        }
    }
}
const inviteChildrenVariants = {
    initial: {
        opacity: 0,
        y: 10,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            ease: 'easeOut',
        }
    }
}

const buttonVariants = {
    initial: {
        y: 100,
    },
    animate: {
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
            delay: 1.5,
        }
    }
}

export default function Cover({ openHandler }) {
    const { query, isReady } = useRouter()
    // Supposed to check if router hook is ready
    // But in this case, it works to delay
    // reading query string a bit
    // So the animation would run properly
    if (!isReady) {
        return null
    }
    const { to } = query
    const invite = !to ? "Tamu Undangan" : to
    const splitInvite = invite.replace(/\s/g, "\u00A0").split("").map((char, index) => {
        return (
            <span className='inline-block whitespace-nowrap overflow-hidden' key={index}>
                <motion.span className='inline-block whitespace-nowrap' variants={inviteChildrenVariants}>
                    {char}
                </motion.span>
            </span>
        )
    })
    const splitKeluarga = "& Keluarga".replace(/\s/g, "\u00A0").split("").map((char, index) => {
        return (
            <span className='inline-block overflow-hidden' key={index}>
                <motion.span className='inline-block' variants={inviteChildrenVariants}>
                    {char}
                </motion.span>
            </span>
        )
    })
    return (
        <motion.section variants={variants} exit='exit' className='fixed z-40 w-full h-screen bg-dark overflow-y-hidden overflow-x-hidden'>
            <Image src={NightTexture} alt="paint texture" placeholder='blur' layout='fill' objectFit='cover' />
            <div className="relative z-10 max-w-screen-sm h-full mx-auto flex flex-col justify-end text-center">
                <motion.div className='relative mx-auto w-fit h-fit mb-16'>
                    <motion.div variants={titleVariants} initial="initial" animate="animate" style={{ top: '55px', left: '50%', marginLeft: '-57px' }} className='flex absolute z-10 items-center space-x-1'>
                        <motion.h1 variants={titleChildrenVariants} style={{ fontSize: '132px' }} className='font-lemon text-neutral'>R</motion.h1>
                        <motion.h1 variants={titleChildrenVariants} style={{ fontSize: '76px' }} className='font-lemon text-neutral'>&</motion.h1>
                        <motion.h1 variants={titleChildrenVariants} style={{ fontSize: '132px' }} className='font-lemon text-neutral'>A</motion.h1>
                    </motion.div>
                    <Image src={Window} alt="flower on window" placeholder='blur' width={456} height={308} />
                </motion.div>
                <motion.p variants={sentence} initial="initial" animate="animate" className="text-body text-neutral mb-3">{
                    "Kepada Yth.".split("").map((singleText, index) => {
                        return (<motion.span variants={letter} key={index}>{singleText}</motion.span>)
                    })
                }</motion.p>
                <motion.div variants={inviteVariants} initial="initial" animate="animate" className="font-alice text-4xl text-neutral mb-16">{splitInvite}<br />{splitKeluarga}</motion.div>
                <div>
                    <motion.button variants={buttonVariants} initial="initial" animate="animate" className='outline-button-light mb-8' onClick={() => openHandler()}>Buka Undangan</motion.button>
                </div>
            </div>
        </motion.section >
    )
}
