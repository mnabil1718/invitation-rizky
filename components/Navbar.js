import { useRouter } from 'next/router'
import ScrollIntoView from 'react-scroll-into-view'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faCalendar,
    faLocationDot,
    faRing,

} from "@fortawesome/free-solid-svg-icons";


export default function Navbar() {
    const router = useRouter()
    return (
        <header className='fixed bottom-0 z-30 w-full'>
            <nav className='max-w-screen-sm mx-auto p-3 bg-white/70 rounded-tl-2xl rounded-tr-2xl backdrop-blur-md drop-shadow-xl'>
                <ul className='flex justify-center space-x-12 sm:space-x-16'>
                    <li><ScrollIntoView selector='#showcase'><a className={`flex flex-col justify-center space-y-1 cursor-pointer ${router.pathname.startsWith('/#showcase') && 'text-blue'}`}><FontAwesomeIcon style={{ fontSize: '1.3em' }} icon={faHouse} /><small className="small">Beranda</small></a></ScrollIntoView></li>
                    <li><ScrollIntoView selector='#couple'><a className={`flex flex-col justify-center space-y-1 cursor-pointer ${router.pathname.startsWith('/#couple') && 'text-blue'}`}><FontAwesomeIcon style={{ fontSize: '1.3em' }} icon={faRing} /><small className="small">Mempelai</small></a></ScrollIntoView></li>
                    <li><ScrollIntoView selector='#event'><a className={`flex flex-col justify-center space-y-1 cursor-pointer ${router.pathname.startsWith('/#event') && 'text-blue'}`}><FontAwesomeIcon style={{ fontSize: '1.3em' }} icon={faCalendar} /><small className="small">Acara</small></a></ScrollIntoView></li>
                    <li><ScrollIntoView selector='#location'><a className={`flex flex-col justify-center space-y-1 cursor-pointer ${router.pathname.startsWith('/#closing') && 'text-blue'}`}><FontAwesomeIcon style={{ fontSize: '1.3em' }} icon={faLocationDot} /><small className="small">Lokasi</small></a></ScrollIntoView></li>
                </ul>
            </nav>
        </header>
    )
}
