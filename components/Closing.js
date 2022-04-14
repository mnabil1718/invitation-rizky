import Image from 'next/image'
import Title from '../public/png/title.png'
import PaperTexture from '../public/webp/paper2.webp'

export default function Closing() {
    return (
        <section className="relative text-neutral">
            <Image src={PaperTexture} alt="Paper texture" placeholder='blur' layout='fill' objectFit='cover' objectPosition="50% 0%" />
            <div className="relative max-w-screen-sm mx-auto text-center">
                <p dir='rtl' lang='ar' className="font-vazirmatn text-lg pt-14 mb-3">بَارَكَ اللهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ</p>
                <p className="body px-2 sm:px-0">“Semoga Allah memberkahimu di waktu bahagia dan memberkahimu di waktu susah, serta semoga Allah mempersatukan kalian berdua dalam kebaikan.”</p>
                <p className="body">(HR Abu Dawud)</p>
                <div className="h-0.25 bg-neutral w-20 mx-auto my-5"></div>
                <p className="body mb-24 px-10 sm:px-0">Atas kehadiran dan do&#39;a restu Bapak/Ibu/Saudara/i sekalian, kami mengucapkan
                    <br /><em>Jazakumullaahu Khayran</em>
                </p>
                <p className="body">Kami yang berbahagia</p>
                <div>
                    <Image src={Title} alt="Rizky dan Aisyah" placeholder="blur" />
                </div>
                <p className="body">Beserta keluarga</p>
                <div style={{ top: '500px' }} className="absolute left-16">
                    <Image className='drop-shadow-md' src="/svg/chirp.svg" alt="chirp" width={21} height={29} />
                </div>
                <div style={{ top: '500px' }} className="absolute mt-2 left-3 transform -scale-x-100">
                    <Image className='drop-shadow-md' src="/png/bird2.png" alt="bird" width={56} height={56} />
                </div>
                <div style={{ top: '680px' }} className="absolute right-12 transform -scale-x-100">
                    <Image className='drop-shadow-md' src="/png/bird.png" alt="bird" width={56} height={56} />
                </div>
                <div className='mb-14'>
                    <Image className='drop-shadow-md' src="/png/letter.png" alt="Love letter" width={150} height={150} />
                </div>
                <small className='font-work text-sm text-white opacity-50 mb-2'>Invitation created by:</small>
                <div className='pb-24'>
                    <Image src="/svg/tingkatin.svg" alt="tingkatin" width={178} height={40} />
                </div>
            </div>
        </section>
    )
}
