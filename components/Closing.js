import Image from 'next/image'

export default function Closing() {
    return (
        <section style={{ backgroundImage: 'url("/png/paper2.png")' }} className="relative text-neutral">
            <div className="max-w-screen-sm mx-auto text-center">
                <p dir='rtl' lang='ar' className="font-vazirmatn text-lg  mb-3">بَارَكَ اللهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ</p>
                <p className="body">“Semoga Allah memberkahimu di waktu bahagia dan memberkahimu di waktu susah, serta semoga Allah mempersatukan kalian berdua dalam kebaikan.”</p>
                <p className="body">(HR Abu Dawud)</p>
                <div className="h-0.25 bg-neutral w-20 mx-auto my-5"></div>
                <p className="body mb-24">Atas kehadiran dan do&#39;a restu Bapak/Ibu/Saudara/i sekalian, kami mengucapkan
                    <br /><em>Jazakumullaahu Khayran</em>
                </p>
                <p className="body">Kami yang berbahagia</p>
                <div>
                    <Image src="/png/title.png" alt="Rizky dan Aisyah" width={328} height={134.63} />
                </div>
            </div>
        </section>
    )
}
