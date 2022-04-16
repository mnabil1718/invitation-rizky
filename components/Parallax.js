import { motion, useViewportScroll, useTransform } from 'framer-motion'
export default function Parallax({ children, inView, position, rotation = false }) {
    const { scrollYProgress } = useViewportScroll()
    const yValue = useTransform(scrollYProgress, [0, inView[0], inView[1], 1], [position[0], position[0], position[1], position[1]])
    const rotateValue = useTransform(scrollYProgress, [0, inView[0], inView[1], 1], [0, 0, 180, 180])
    return (
        <>
            {rotation ? (
                <motion.div
                    style={{
                        y: yValue,
                        rotate: rotateValue,
                    }}
                >
                    {children}
                </motion.div>
            ) :
                (<motion.div
                    style={{
                        y: yValue,
                    }}
                >
                    {children}
                </motion.div>)}
        </>
    )
}
