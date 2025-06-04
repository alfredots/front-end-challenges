import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-cursed-black w-100 h-screen relative overflow-hidden flex flex-col justify-between">
      <div className="w-[421px] h-[431px] bg-warm-blue rounded-full blur-[312px] absolute top-[6.688rem] left-[14.063rem]" />
      <Header />
      <Hero />
      <div className="w-full flex flex-col items-center sm:mt-7">
        <Image
          src="/app-image.png"
          width={1024}
          height={418}
          alt="imagem do app"
        />
      </div>
    </div>
  )
}
