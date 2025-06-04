import { Icon } from './Icon'

export const Header = () => (
  <header className="w-100 flex items-center justify-between px-4 sm:px-24 pt-12 sm:pt-7">
    <h1 className="text-white text-4xl font-bold sm:w-[158px]">UNX</h1>
    <nav className="items-center gap-14 hidden sm:flex">
      {['Products', 'About', 'Resources', 'Contact'].map((text) => (
        <a href="#" key={text} className="text-white text-lg font-semibold">
          {text}
        </a>
      ))}
    </nav>
    <button className="text-white hover:text-white/90 text-lg font-semibold rounded-lg bg-nero hover:bg-nero/60 px-8 py-[0.875rem] hidden sm:block">
      Dashboard
    </button>
    <Icon />
  </header>
)
