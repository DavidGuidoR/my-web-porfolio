import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import Button from "./button";

function NavBar () {
    return(
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
                <FontAwesomeIcon icon={faLinkedin} className='text-white hover:text-primary text-3xl'/>
            </NavLink>
            <NavLink to="https://github.com/DavidGuidoR" target='blank' className={({ isActive }) => isActive ? 'font-semibold underline' : 'hover:underline'}>
                <FontAwesomeIcon icon={faGithub} className='text-white hover:text-primary text-3xl'/>
            </NavLink>
            <NavLink to="/" className={({ isActive }) => isActive ? 'font-semibold underline' : 'hover:underline'}>
                <Button className='rounded-xl px-6'>
                <p>Currículo</p>
                </Button>
            </NavLink>
            </div>
        </nav> 
    )
}

export default NavBar