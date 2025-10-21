import { Outlet } from 'react-router-dom'
import NavBar from '../components/navbar';
import Footer from '../components/footer';

const AppLayout = () => {
  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center bg-background">
      <header className="p-4 py-10 max-w-7xl px-8 w-full">
        <NavBar />
        <div className='mx-auto border-b border-b-stone-400/20 w-full md:w-3/4 mt-12'/>
      </header>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
      <Footer/>
    </div>
  )
}

export default AppLayout;
