import { Icon } from './Icon'

export const Header = () => {
  const navItemClassName =
    'text-white text-xl font-bold hover:underline underline-offset-8'

  return (
    <header className="w-full flex justify-between sm:justify-end items-center pr-10 pt-9">
      <h1 className="text-white text-5xl leading-[72px] font-bold pl-6 sm:hidden">
        Xae
      </h1>
      <nav className="hidden sm:flex gap-10">
        {['Home', 'About', 'Gallery', 'Contact'].map((text) => (
          <a href="#" className={navItemClassName} key={text}>
            {text}
          </a>
        ))}
      </nav>
      <Icon name="sun" className="pl-10 hidden sm:block" />
      <Icon name="menu" className="sm:hidden" />
    </header>
  )
}
