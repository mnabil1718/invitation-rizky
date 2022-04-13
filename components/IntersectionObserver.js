import { useState, useEffect, useRef, createContext } from "react"
import { useIntersection } from "react-use"

export const IntersectionContext = createContext({ inView: true })

export const IntersectionObserver = ({ children }) => {
    const [inView, setInView] = useState(false)
    const intersectionRef = useRef(null)
    const intersection = useIntersection(intersectionRef, { threshold: 0 })

    useEffect(() => {
        if (intersection && intersection.intersectionRatio > 0) {
            setInView(true)
        }
    }, [intersection])

    return (
        <IntersectionContext.Provider value={{ inView }}>
            <div ref={intersectionRef}>{children}</div>
        </IntersectionContext.Provider>
    )





}
