import Image from 'next/image'
import { Icon } from './Icon'

export const Exploration = () => (
  <div className="w-full bg-radial self-end flex backdrop-blur-xl mb-20 sm:mb-0">
    <Image
      className="ml-32 hidden sm:block"
      src="/moon.jpg"
      width={324}
      height={255}
      alt="astronauta na lua"
    />
    <Image
      className="sm:hidden"
      src="/moon.jpg"
      width={238}
      height={187}
      alt="astronauta na lua"
    />
    <div className="ml-5 sm:ml-20 mt-7 sm:mt-12">
      <h2 className="text-white text-base sm:text-2xl font-bold">
        Exploration
      </h2>
      <div className="flex-col sm:flex-row flex sm:items-end mt-2 sm:mt-4 gap-4 sm:gap-0">
        <p className="text-white text-lg font-medium w-full max-w-[427px] hidden sm:inline">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat id
          potenti faucibus nec, rhoncus, vulputate
        </p>
        <p className="text-white text-xs font-medium w-full max-w-[111px] sm:hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing{' '}
        </p>
        <Icon name="arrowRight" className="self-end" />
      </div>
    </div>
    <div className="ml-20 mt-12 hidden sm:block">
      <h2 className="text-white text-2xl font-bold">Footprint</h2>
      <div className="flex items-end mt-4">
        <p className="text-white text-lg font-medium w-full max-w-[427px]">
          Lorem ipsum dolor sit amet, consectetur
        </p>
      </div>
    </div>
  </div>
)
