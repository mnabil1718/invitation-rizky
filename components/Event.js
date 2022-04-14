import Image from 'next/image'
import Link from 'next/link'
import WallTexture from '../public/webp/wall-texture.webp'
import Window from '../public/webp/window.webp'

export default function Event() {
    return (
        <section id='event' className="relative text-neutral">
            <Image src={WallTexture} alt="paint texture" placeholder='blur' layout='fill' objectFit='cover' objectPosition="0% 100%" />
            <div className="relative max-w-screen-xl mx-auto flex flex-col px-20 lg:px-0 lg:flex-row justify-center items-center pb-24 pt-16 md:pt-28 lg:pt-36 space-x-0 space-y-10 lg:space-y-0">
                <div className='text-center lg:basis-1/4'>
                    <h1 className='title mb-5'>Akad Nikah</h1>
                    <h2 className='subheadline'>Sabtu, 14 Mei 2022</h2>
                    <p className="body">Pukul 08.00 - 10.00 WITA (Laki-laki)</p>
                    <p className="body">Pukul 10.00 - 12.00 WITA (Perempuan)</p>
                    <div className="h-0.25 bg-neutral w-20 mx-auto my-5"></div>
                    <p className="body mb-5">Jl. dr. Soetomo, Gg. Setia Kawan, Lingk. Karang Baru Selatan, Kota Mataram - Nusa Tenggara Barat</p>
                    <Link href="https://www.instagram.com/lr_adriansyah/"><a target="_blank"><button className='outline-button'>Live Instagram</button></a></Link>
                </div>
                <div className='lg:basis-2/4 text-center'>
                    <Image src={Window} alt='window' width={250} height={250} placeholder='blur' />
                </div>
                <div className='text-center lg:basis-1/4'>
                    <h1 className='title mb-5'>Walimatul Ursy</h1>
                    <h2 className='subheadline'>Ahad, 29 Mei 2022</h2>
                    <p className="body">Pukul 09.00 - 17.00 WIB</p>
                    <div className="h-0.25 bg-neutral w-20 mx-auto my-5"></div>
                    <p className="body">Amma Alamia <br />
                        Jl. Raya Pondok Bitung, Pasir Tengah, Sukaharja, Kec. Cijeruk, Kabupaten Bogor
                        <br />(Di Depan Ponpes Ibnu Taimiyah)
                    </p>
                </div>
            </div>
            <div id='location' className="relative max-w-screen-xl mx-auto p-5">
                <h1 className="title mb-5 text-center">Lokasi Acara</h1>
                <div className='lg:flex space-y-10 lg:space-y-0 lg:space-x-10'>
                    <div className="flex flex-col w-full items-center">
                        <p className="subheadline mb-3">Lombok</p>
                        <iframe height={480} className='relative z-10 w-full rounded-xl' style={{ border: 0 }} loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/place?q=-8.568541%2C116.109356&key=AIzaSyB737Dw7OHUuvAbAtKloX8L-8TFVep3ZwI"></iframe>
                    </div>
                    <div className="flex flex-col w-full items-center">
                        <p className="subheadline mb-3">Bogor</p>
                        <iframe height={480} className='relative z-10 w-full rounded-xl' style={{ border: 0 }} loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/place?q=8QQ8%2BR6P%20AmmA%20AlamiA%2C%20Sukaharja%2C%20Cijeruk%2C%20Bogor%20Regency%2C%20West%20Java%2016740&key=AIzaSyB737Dw7OHUuvAbAtKloX8L-8TFVep3ZwI"></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}
