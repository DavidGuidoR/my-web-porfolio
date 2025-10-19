import { NavLink, Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <header className="border-b p-4">
        <nav className="flex gap-4">
          <NavLink to="/" className={({ isActive }) => isActive ? 'font-semibold underline' : 'hover:underline'}>
            Home
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'font-semibold underline' : 'hover:underline'}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'font-semibold underline' : 'hover:underline'}>
            Contact
          </NavLink>
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
