import { Exploration } from '@/components/Exploration'
import { Header } from '@/components/Header'
import { SideMenu } from '@/components/Sidemenu'

export default function Home() {
  return (
    <div className="w-full h-screen bg-gradient flex">
      <SideMenu />
      <div className="w-full bg-astrounaut bg-mobile sm:bg-right bg-no-repeat bg-h-screen sm:bg-contain bg-fixed flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col justify-end sm:justify-between">
          <div>
            <div className="pl-7 sm:pl-32 pt-24 mb-12 sm:mb-0">
              <h1 className="text-white text-5xl sm:text-7xl font-bold">
                Adventure <br /> Together
              </h1>
              <p className="text-white text-xs sm:text-lg font-medium max-w-[260px] sm:max-w-[524px] pt-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Placerat id potenti faucibus nec, rhoncus, vulputate vitae.
                Dictum rutrum ut cras nullam porta id dolor arcu, quis.
              </p>
            </div>
          </div>
          <Exploration />
        </main>
      </div>
    </div>
  )
}
