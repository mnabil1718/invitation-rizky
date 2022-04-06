import Image from 'next/image'
import Showcase from '../components/Showcase'
import Ayat from '../components/Ayat'
import Couple from '../components/Couple'
export default function Home() {
  return (
    <div className="font-lora text-dark">
      <Showcase />
      <div className="relative">
        <Ayat />
        <div className='w-full z-10 h-48 absolute -bottom-24 left-0'>
          <Image src='/svg/paper-rip.svg' alt="paper rip" layout='fill' />
        </div>
      </div>
      <Couple />
    </div>

  )
}
