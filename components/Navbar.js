import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faCalendar,
    faLocationDot,
    faRing,

} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    return (
        <header className='fixed bottom-0 z-30 py-5 bg-white/70 w-full rounded-tl-xl rounded-tr-xl backdrop-blur-md'>
            <nav className='max-w-screen-sm mx-auto'>
                <ul className='flex justify-center space-x-16'>
                    <li><Link href='#showcase'><a className='flex flex-col justify-center space-y-1'><FontAwesomeIcon icon={faHouse} size='2x' /><small className="small">Beranda</small></a></Link></li>
                    <li><Link href='#couple'><a className='flex flex-col justify-center space-y-1'><FontAwesomeIcon icon={faRing} size='2x' /><small className="small">Mempelai</small></a></Link></li>
                    <li><Link href='#event'><a className='flex flex-col justify-center space-y-1'><FontAwesomeIcon icon={faCalendar} size='2x' /><small className="small">Acara</small></a></Link></li>
                    <li><Link href='#closing'><a className='flex flex-col justify-center space-y-1'><FontAwesomeIcon icon={faLocationDot} size='2x' /><small className="small">Lokasi</small></a></Link></li>
                </ul>
            </nav>
        </header>
    )
}
