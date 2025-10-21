import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer () {
    return(
        <div className="w-full bg-custom-black px-20 py-8">
            <div className="flex flex-col gap-12 items-center justify-center">
                <p className="text-3xl font-bold">David Guido • Desarrollador</p>
                <p className="text-lg">Siempre a la espera de nuevas oportunidades que me permitan un crecimiento profesional</p>
                <span className="text-lg">Contacto🙂</span>
                <div className="flex gap-8">
                  <a href="https://linkedin.com/in/david-guido-rodriguez-a1a9152b2" target="blank">
                    <FontAwesomeIcon icon={faLinkedin} className='text-white hover:text-primary text-3xl'/>
                  </a>
                  <a href="https://github.com/DavidGuidoR" target="blank">
                    <FontAwesomeIcon icon={faGithub} className='text-white hover:text-primary text-3xl'/>
                  </a>
                  <a href="mailto:guidod890@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} className='text-white hover:text-primary text-3xl'/>
                  </a>
                </div>
                <div>
                  © {new Date().getFullYear()} Mi Portafolio
                </div>
            </div>
        </div>
    )
}

export default Footer;