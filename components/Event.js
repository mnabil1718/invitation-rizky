import Image from 'next/image'

export default function Event() {
    return (
        <section id='event' style={{ backgroundImage: 'url("/png/wall-texture.png")' }} className="relative text-neutral">
            <div className="max-w-screen-lg mx-auto flex flex-col px-20 lg:px-0 lg:flex-row justify-center items-center pb-24 pt-16 md:pt-28 lg:pt-36 space-x-0 space-y-10 lg:space-y-0">
                <div className='text-center lg:basis-1/5'>
                    <h1 className='title mb-5'>Akad Nikah</h1>
                    <h2 className='subheadline'>Sabtu, 14 Mei 2022</h2>
                    <p className="body">Pukul 08.00 WITA - Selesai</p>
                    <div className="h-0.25 bg-neutral w-20 mx-auto my-5"></div>
                    <p className="body">Jl. dr. Soetomo, Gg. Setia Kawan, Lingk. Karang Baru Selatan, Kota Mataram - Nusa Tenggara Barat</p>
                </div>
                <div className='lg:basis-2/5 text-center'>
                    <Image src='/png/window.png' alt='window' width={250} height={250} priority placeholder='blur' blurDataURL='/png/window.png' />
                </div>
                <div className='text-center lg:basis-1/5'>
                    <h1 className='title mb-5'>Walimatul Ursy</h1>
                    <h2 className='subheadline'>Ahad, 29 Mei 2022</h2>
                    <p className="body">Pukul 09.00 - 17.00 WIB</p>
                    <div className="h-0.25 bg-neutral w-20 mx-auto my-5"></div>
                    <p className="body">Pesantren Ibnu Taimiyah
                        Jl. Raya Pondok Bitung, Pasir Tengah, Sukaharja, Kec. Cijeruk, Kabupaten Bogor
                    </p>
                </div>

            </div>
        </section>
    )
}
