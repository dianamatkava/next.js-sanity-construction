import DefaultLogo from '../../../../public/img/default_logo.png'
import { SunIcon } from '@heroicons/react/24/outline'



export const Header = () => {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className='flex'>
            <a href="#"className='flex'>
              <img className='h-12' src={DefaultLogo} alt="Logo" />
              <span className="m-auto font-bold" >Company name</span>
            </a>
          </div>
          
          <div className='flex'>
            <a href="#" className='px-3'>Docs</a>
            <a href="#" className='px-3'>Components</a>
            <a href="#" className='px-3'>Blogs</a>
            <a href="#" className='px-3'>Showcase</a>
          </div>

          <div className='flex'>
            <SunIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
            
          </div>
      </nav>
    </header>
  )
}