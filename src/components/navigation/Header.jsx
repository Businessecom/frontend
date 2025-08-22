import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { Bars3Icon, BellIcon } from '@heroicons/react/24/outline'

const Header = () => {
  const { user } = useAuth()
  const [notifications, setNotifications] = useState([])
  
  return (
    <header className="bg-white shadow-sm z-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Open sidebar</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
              <h1 className="ml-2 text-xl font-bold text-blue-600">UPNELO</h1>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="flex-shrink-0 relative">
              <button
                type="button"
                className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
                {notifications.length > 0 && (
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>
                )}
              </button>
            </div>
            
            <div className="ml-3 md:hidden">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="inline-block h-8 w-8 rounded-full bg-gray-200 overflow-hidden">
                    <div className="flex items-center justify-center h-full w-full bg-gray-300 text-gray-600">
                      {user?.name?.charAt(0) || 'U'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header