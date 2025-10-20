import { NavLink, Outlet } from 'react-router-dom'
import Button from '../components/button';

const AppLayout = () => {
  return (
    <div className="min-h-screen min-w-screen flex flex-col bg-background px-10">
      <header className="border-b p-4">
        <nav className="flex items-center justify-between gap-4">
          <div className='flex gap-4'>
            <NavLink to="/" className={({isActive}) => isActive ? 'font-semibold underline' : 'hover:underline'}>
              <div className='flex gap-1'>
                <span className='text-primary text-3xl'>{'<C/>'}</span>
                <p className='text-white hover:text-primary text-3xl'>
                  DAVID GUIDO
                </p>
              </div>
            </NavLink>
          </div>
          <div className='flex items-center gap-8'>
            <NavLink to="/" className={({ isActive }) => isActive ? 'font-semibold underline' : 'hover:underline'}>
              <p className='text-white hover:text-primary text-xl'>
                Inicio
              </p>
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'font-semibold underline' : 'hover:underline'}>
              <p className='text-white hover:text-primary text-xl'>
                Proyectos
              </p>
            </NavLink>
            <NavLink to="https://linkedin.com/in/david-guido-rodriguez-a1a9152b2" target='blank' className={({ isActive }) => isActive ? 'font-semibold underline' : 'hover:underline'}>
              <p className='text-white hover:text-primary text-xl'>
                LinkedIn
              </p>
            </NavLink>
            <NavLink to="https://github.com/DavidGuidoR" target='blank' className={({ isActive }) => isActive ? 'font-semibold underline' : 'hover:underline'}>
              <p className='text-white hover:text-primary text-xl'>
                Github
              </p>
            </NavLink>
            <NavLink to="/" className={({ isActive }) => isActive ? 'font-semibold underline' : 'hover:underline'}>
              <Button>
                <p>Curriculum</p>
              </Button>
            </NavLink>
          </div>
        </nav>
      </header>

      <main className="flex-1 p-6">
        <Outlet />
      </main>

      <footer className="border-t p-4 text-sm text-center">
        © {new Date().getFullYear()} Mi Portafolio
      </footer>
    </div>
  )
}

export default AppLayout;
