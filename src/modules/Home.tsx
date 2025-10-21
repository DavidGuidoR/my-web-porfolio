import { faEnvelope} from "@fortawesome/free-regular-svg-icons";
import { faBriefcase, faDownload, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextPill from "../components/text-pill";
import Button from "../components/button";

const Home = () => {
    return(
        <section className="flex items-center justify-center">
            <div className="max-w-6xl flex gap-4">
                <div className="flex-2 flex flex-col justify-center">
                    <div className="flex flex-col p-2 gap-8 pr-12">
                        <span className="text-5xl text-custom-gray">
                            Hola, soy 
                            <span className="text-primary"> David Guido</span>
                            <p className="text-5xl text-custom-gray mt-2">Desarrollador web full-stack</p>
                        </span>
                        <p className="text-lg text-custom-gray">
                            Me apasiona crear soluciones digitales que combinan código limpio, interfaces rápidas y experiencias atractivas. Trabajo con tecnologías modernas como <strong>React</strong>,
                            <strong> Node.js</strong> y <strong>Tailwind</strong>.
                        </p>
                        <p className="text-lg text-custom-gray">Siempre dispuesto a aprender y utilizar tecnologías y lenguajes diferentes</p>
                        <div className="my-4 max-w-1/3">
                            <Button className='rounded-full px-6 bg-white flex flex-row items-center justify-center gap-2'>
                                <p className="text-xl text-center">Descargar CV</p>
                                <FontAwesomeIcon icon={faDownload} className="text-xl" />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="flex-1 content-center border-4 rounded-br-[10rem] rounded-tl-[10rem] shadow-lg shadow-primary aspect-[9/16]">
                    <div className="container flex flex-col gap-4 px-12">
                        <div className="flex flex-col justify-center items-center mb-4">
                            <img src="/static/icon_programmer.png" className="size-32 rounded-full border-white border-4 mb-4"/>
                            <p className="text-3xl">David</p>
                            <p className="text-lg">Desarrollador Full-stack</p>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-4">
                            <div className="flex justify-center items-center gap-2 text-lg">
                                <FontAwesomeIcon icon={faEnvelope} className='text-primary text-base'/>
                                <p>GuidoD890@gmail.com</p>
                            </div>
                            <div className="flex justify-center items-center gap-2 text-lg">
                                <FontAwesomeIcon icon={faLocationDot} className='text-primary text-base'/>
                                <p>Morelia, Michoacan</p>
                            </div>
                            <div className="flex justify-center items-center gap-2 text-lg">
                                <FontAwesomeIcon icon={faBriefcase} className='text-primary text-base' />
                                <p>Full-time</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 gap-8 justify-items-center">
                            <TextPill text="HTML" />
                            <TextPill text="TS" />
                            <TextPill text="CSS" />
                            <TextPill text="REACT" />
                            <TextPill text="NEXT.JS" />
                            <TextPill text="TAILWIND" />
                            <TextPill text="NODE.JS" />
                            <TextPill text="SQL" />
                            <TextPill text="NOSQL" />
                            <TextPill text="EXPRESS" />
                            <TextPill text="REST API" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;