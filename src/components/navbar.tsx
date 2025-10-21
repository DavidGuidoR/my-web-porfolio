import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

function NavBar () {
    const [isOpen, setIsOpen] = React.useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

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
            <div className='hidden md:flex items-center gap-8'>
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
            </div>
            {!isOpen && (
            <button className="flex flex-col md:hidden" onClick={handleClick}>
                <FontAwesomeIcon icon={faBars} className="text-4xl"/>
            </button>
            )}
            
            {isOpen && (
                <div className="p-20 fixed inset-0 bg-custom-black">
                    <button className="w-full flex justify-end">
                        <FontAwesomeIcon icon={faX} className="text-5xl" onClick={handleClick}/>
                    </button>
                    <div className="flex flex-col items-center justify-center gap-24 h-full">
                        <NavLink to="/" className={({ isActive }) => isActive ? 'font-semibold underline' : 'hover:underline'}>
                            <p className='text-white hover:text-primary text-3xl'>
                            Inicio
                            </p>
                        </NavLink>
                        <NavLink to="/projects" className={({ isActive }) => isActive ? 'font-semibold underline' : 'hover:underline'}>
                            <p className='text-white hover:text-primary text-3xl'>
                            Proyectos
                            </p>
                        </NavLink>
                        <NavLink to="https://linkedin.com/in/david-guido-rodriguez-a1a9152b2" target='blank' className={({ isActive }) => isActive ? 'font-semibold underline' : 'hover:underline'}>
                            <FontAwesomeIcon icon={faLinkedin} className='text-white hover:text-primary text-5xl'/>
                        </NavLink>
                        <NavLink to="https://github.com/DavidGuidoR" target='blank' className={({ isActive }) => isActive ? 'font-semibold underline' : 'hover:underline'}>
                            <FontAwesomeIcon icon={faGithub} className='text-white hover:text-primary text-5xl'/>
                        </NavLink>
                    </div>
                </div>
                
            )}
        </nav> 
    )
}

export default NavBar