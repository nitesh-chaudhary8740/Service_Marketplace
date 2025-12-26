import React from 'react'
import { Menu, Bell} from 'lucide-react';
function Header({setSidebarOpen,isSidebarOpen,activeTab}) {
  return (
     <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-140">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-gray-50 rounded-lg text-gray-500 transition-colors">
              <Menu size={20} />
            </button>
            <h2 className="font-black text-lg hidden md:block capitalize tracking-tight">{activeTab}</h2>
          </div>
          
          <div className="flex items-center gap-6">
              <button className="relative p-2 text-gray-400 hover:bg-gray-50 rounded-lg transition-colors">
                <Bell size={20} />
                <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <div className="flex-col items-end hidden sm:flex">
                <p className="text-xs font-black text-gray-900">Super Admin</p>
                <p className="text-[10px] font-bold text-green-500">System Online</p>
              </div>
              <div className="w-10 h-10 bg-linear-to-tr from-blue-600 to-blue-400 rounded-xl shadow-md border-2 border-white flex items-center justify-center text-white font-bold">A</div>
          </div>
        </header>
  )
}

export default Header
