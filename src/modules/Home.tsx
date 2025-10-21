import { faEnvelope, faMap } from "@fortawesome/free-regular-svg-icons";
import { faBriefcase, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
    return(
        <section className="flex items-center justify-center">
            <div className="max-w-6xl flex gap-4">
                <div className="flex-2 flex flex-col p-2 border gap-8">
                    <span className="text-5xl text-white">
                        Hola, soy 
                        <span className="text-primary"> David Guido</span>
                    </span>
                    <p className="text-5xl text-white">Desarrollador web full-stack</p>
                    <span className="text-white">
                        I’m passionate about crafting clean architectures, performant interfaces, and impactful software that solves real-world problems.
                    </span>
                </div>
                <div className="flex-1 flex flex-col justify-center items-center content-center border-4 rounded-br-[10rem] rounded-tl-[10rem] aspect-[9/16] shadow-lg shadow-primary">
                    <img src="/static/icon_programmer.png" className="size-32 rounded-full border-white border-4"/>
                    <p>David</p>
                    <p>Desarrollador Full-stack</p>
                    <FontAwesomeIcon icon={faEnvelope} className='text-primary text-base'/>
                    <FontAwesomeIcon icon={faLocationDot} className='text-primary text-base'/>
                    <FontAwesomeIcon icon={faBriefcase} className='text-primary text-base' />
                </div>
            </div>
        </section>
    )
}

export default Home;