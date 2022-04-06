import Image from 'next/image'
import Link from 'next/link'

export default function Ayat() {
    return (
        <section style={{ backgroundImage: 'url("/png/night-texture.png")' }} className="w-full relative overflow-y-hidden text-neutral">
            <div className="max-w-screen-sm relative text-center mx-auto pt-12 pb-96 z-20">
                <p className='body text-center px-3 mb-7'>&quot;Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda kebesaran Allah bagi kaum yang berpikir.&quot;</p>
                <div className="flex items-center justify-center space-x-5 mb-8">
                    <div className='bg-neutral h-0.25 w-32'></div>
                    <h3 className='body neutral'>Q.S Ar-Rum: 21</h3>
                    <div className='bg-neutral h-0.25 w-32'></div>
                </div>
                <div className="mx-auto w-fit flex space-x-5 mb-5">
                    <div>
                        <h1 className="title">112</h1>
                        <p className="body">Hari</p>
                    </div>
                    <h1 className="title">:</h1>
                    <div>
                        <h1 className="title">18</h1>
                        <p className="body">Jam</p>
                    </div>
                    <h1 className="title">:</h1>
                    <div>
                        <h1 className="title">750</h1>
                        <p className="body">Menit</p>
                    </div>
                </div>
                <Link href="https://calendar.google.com/event?action=TEMPLATE&tmeid=NTVycHUxcjRtb21hZ2Nocmw0ZWVzMHNlNGsgY3VjaWJhanUxMjNAbQ&tmsrc=cucibaju123%40gmail.com"><a target="_blank"><button className='outline-button'>Simpan Tanggal</button></a></Link>
            </div>
            <div className='absolute bottom-0 sm:-bottom-32 md:-bottom-64 lg:-bottom-96 xl:-bottom-3/4'>
                <Image src='/png/night-scenery.png' alt="night scenery" width={2000} height={2000} placeholder='blur' blurDataURL='/png/night scenery.png' objectFit='cover' objectPosition='0 0%' />
            </div>
        </section>
    )
}
