import { Menu } from 'lucide-react'
import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet";
import { SideBar } from './SideBar';

  
export const MobileSideBar = () => {
  return (
    <Sheet>
        <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
             <Menu />
        </SheetTrigger>
         <SheetContent side="left" className="p-0 ">
            <SideBar />
        </SheetContent>
  </Sheet>
  )
}