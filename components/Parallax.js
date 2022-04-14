import { motion, useViewportScroll, useTransform } from 'framer-motion'
export default function Parallax({ children, inView, position }) {
    const { scrollYProgress } = useViewportScroll()
    const yValue = useTransform(scrollYProgress, [0, inView[0], inView[1], 1], [position[0], position[0], position[1], position[1]])
    return (
        <motion.div
            style={{
                y: yValue,
            }}
        >
            {children}
        </motion.div>
    )
}
