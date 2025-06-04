import { poppins } from '@/styles/fonts'

export const Hero = () => (
  <section className="w-full flex flex-col items-center mt-7">
    <h1 className="text-white text-4xl sm:text-6xl font-bold">
      The Best Way to
    </h1>
    <h1 className="bg-text-gradient bg-clip-text text-fill-transparent text-center text-4xl sm:text-6xl leading-tight sm:leading-tight font-bold mt-5">
      Track your Daily Progress
    </h1>
    <h2
      className={
        'text-palladium text-xs sm:text-lg font-medium max-w-[287px] sm:max-w-[670px] text-center mt-9 ' +
        poppins.className
      }
    >
      UNX Allows you to track all your daily task progress using gamification
      methods and earn rewards for specific coupons
    </h2>
    <button className="text-white hover:text-white/90 text-lg font-semibold rounded-lg bg-ultramarine hover:bg-ultramarine/60 mt-9 py-5 px-12">
      Try this app
    </button>
  </section>
)
