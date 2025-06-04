import { Icon } from './Icon'

export const SideMenu = () => (
  <aside className="max-w-[161px] sm:w-full sm:h-full border-white border-r pt-5 pb-6 sm:flex flex-col items-center justify-between hidden w-0">
    <h1 className="text-white text-5xl leading-[72px] font-bold">Xae</h1>
    <div className="flex flex-col items-center gap-6">
      <Icon name="facebook" />
      <Icon name="instagram" />
      <Icon name="twitter" />
    </div>
  </aside>
)
