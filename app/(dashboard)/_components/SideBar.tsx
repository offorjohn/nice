import { Logo } from "./Logo"
import { SidebarRoutes } from "./SidebarRoutes"

export const SideBar = () => {
  return (
    <div className='h-full border-r flex flex-col overflow-y-auto  shadow-sm'>
        <div className="p-6">
            <Logo />
        </div>
        <div className="flex flex-col w-full">
            <SidebarRoutes />
        </div>
    </div>
  )
}
