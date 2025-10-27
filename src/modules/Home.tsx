import { faEnvelope} from "@fortawesome/free-regular-svg-icons";
import { faBriefcase, faCode, faCubes, faDatabase, faDisplay, faDownload, faLocationDot, faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextPill from "../components/text-pill";
import Button from "../components/button";
import AboutBackground from '@/assets/about-background.png'
import type React from "react";
import { faCss3Alt, faGitAlt, faHtml5, faNode, faReact } from "@fortawesome/free-brands-svg-icons";
import Circle from "../components/circle-skill";

const Home = () => {
    return(
        <>
        <Home.Container>
            <Home.Hero/>
        </Home.Container>
            <Home.About/>
            <Home.Skills/>
        </>
    )
}

const Container = ({children}: {children:React.ReactNode}) => {
    return(
        <main className="flex-1 px-6 md:py-10 lg:py-3">
            {children}
        </main>
    )
}

const HeroSection = () => {
    return(
        <section className="flex items-center justify-center">
            <div className="max-w-[450px] md:max-w-6xl flex flex-col md:flex-row gap-16 lg:gap-4 py-10">
                <div className="order-2 md:order-1 flex-2 flex flex-col justify-center mb-12 md:mb-0">
                    <div className="flex flex-col p-2 gap-8 xl:pr-12">
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
                        <div className="my-4 max-w-3/4 xl:max-w-1/3 mx-auto md:mx-0">
                            <Button className='rounded-full px-6 bg-white flex flex-row items-center justify-center gap-2'>
                                <a href="https://drive.google.com/file/d/19mWX66De_fzDZVEWaYZWuG-LRNHkr7_7/view?usp=sharing" target="blank">
                                     <span className="text-background text-xl text-center">Descargar CV</span>
                                    <FontAwesomeIcon icon={faDownload} className="text-xl text-background" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="order-1 md:order-2 flex-1 content-center border-4 rounded-br-[10rem] rounded-tl-[10rem] shadow-lg shadow-primary aspect-[9/16] my-12 lg:my-0">
                    <div className="container flex flex-col gap-4 md:gap-4 px-12">
                        <div className="flex flex-col justify-center items-center mb-1 md:mb-4">
                            <img src="/static/icon_programmer.png" className="size-24 md:size-32 rounded-full border-white border-4 mb-4"/>
                            <p className="text-xl md:text-3xl">David</p>
                            <p className="text-base lg:text-lg">Desarrollador Full-stack</p>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-4">
                            <div className="flex justify-center items-center gap-2 text-base lg:text-lg">
                                <FontAwesomeIcon icon={faEnvelope} className='text-primary text-base'/>
                                <p>GuidoD890@gmail.com</p>
                            </div>
                            <div className="flex justify-center items-center gap-2 text-base lg:text-lg">
                                <FontAwesomeIcon icon={faLocationDot} className='text-primary text-base'/>
                                <p>Morelia, Michoacan</p>
                            </div>
                            <div className="flex justify-center items-center gap-2 text-base lg:text-lg">
                                <FontAwesomeIcon icon={faBriefcase} className='text-primary text-base' />
                                <p>Full-time</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 md:grid-cols-3 xl:grid-cols-4 gap-y-4 md:gap-2 xl:gap-8 justify-items-center">
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
    );
}

const AboutSection = () => {
    return(
        <section className="relative flex items-center justify-center w-full min-w-screen bg-no-repeat bg-cover bg-center py-20" style={{ backgroundImage: `url(${AboutBackground})` }} >
            <div className="absolute inset-0 bg-black/60 pointer-events-none" />
            <div className="max-w-[450px] md:max-w-6xl relative z-10 flex flex-col items-center gap-3">
                <div className="text-primary text-4xl">◆</div>
                <div className="text-white/70">|</div>
                <div className="text-white/70">|</div>
                <div className="text-white/70">|</div>
                <div className="text-primary">🔺</div>
                <div className="flex flex-col gap-8 px-10">
                    <div className="w-fit text-3xl md:text-5xl text-secondary border-4 border-secondary rounded-br-[2rem] rounded-tl-[2rem] py-4 px-12 bg-background">
                        Acerca de mi
                    </div>
                    <span className="text-justify text-white bg-background p-10 rounded-2xl text-lg leading-8">
                        <p className="text-secondary text-2xl md:text-3xl mb-2">Hola!</p>
                        Soy un Ingeniero en Sistemas Computacionales titulado por el Instituto Tecnológico de Morelia, apasionado por el desarrollo web moderno y la creación de experiencias digitales eficientes, limpias y bien diseñadas.
                        <br /> 
                        <br />
                        Mi enfoque combina la lógica del backend con la creatividad del frontend: disfruto tanto optimizando arquitecturas y APIs como dando vida a interfaces rápidas y fluidas.
                        <br />
                        <br />
                        También tengo experiencia en el diseño de sistemas escalables, gestión de roles y permisos, integración de servicios externos, y automatización de procesos en entornos productivos.
                        <br />
                        <br />
                        Me caracterizo por ser una persona metódica, colaborativa y orientada a la mejora continua, con una mentalidad autodidacta que me impulsa a seguir aprendiendo nuevas tecnologías y patrones de desarrollo. Actualmente busco seguir creciendo profesionalmente, colaborando en proyectos innovadores donde pueda aportar valor técnico y humano.</span>
                </div>
            </div>
        </section>
    );
}

const SkillsSection = () => {
    return(
    <section className="relative w-full py-20">
      <div className="max-w-[450px] md:max-w-6xl mx-auto relative z-10 flex flex-col items-center gap-3">
        <div className="text-primary text-4xl">◆</div>
        <div className="text-white/70">|</div>
        <div className="text-white/70">|</div>
        <div className="text-white/70">|</div>
        <div className="text-primary">🔺</div>

        <div className="mt-2 w-fit text-5xl text-secondary border-4 border-secondary rounded-br-[2rem] rounded-tl-[2rem] px-12 py-4 bg-background">
          Skills
        </div>
      </div>
      <div className="max-w-[450px] md:max-w-6xl mx-auto mt-10 grid gap-6 md:grid-cols-2 relative z-10 px-10">
        <div className="relative bg-secondary/90 text-background rounded-xl shadow-xl p-6 md:p-7">
          <div className="absolute left-0 top-0 h-full w-3 bg-primary rounded-l-xl" />
          <div className="flex items-center gap-3">
            <div className="grid place-items-center w-10 h-10 rounded-md bg-background/20 text-background">
              <FontAwesomeIcon icon={faDisplay} className="text-xl" />
            </div>
            <h3 className="text-2xl font-semibold tracking-wide">Frontend</h3>
          </div>
          <p className="mt-3 text-sm tracking-widest">
            Interfaces rápidas, accesibles y responsivas.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <TextPill text="React"/>
            <TextPill text="Next.js"/>
            <TextPill text="TypeScript"/>
            <TextPill text="Tailwind"/>
            <TextPill text="Vite"/>
          </div>
        </div>

        <div className="relative bg-secondary/90 text-background rounded-xl shadow-xl p-6 md:p-7">
          <div className="absolute left-0 top-0 h-full w-3 bg-primary rounded-l-xl" />
          <div className="flex items-center gap-3">
            <div className="grid place-items-center w-10 h-10 rounded-md bg-background/20 text-background">
              <FontAwesomeIcon icon={faServer} className="text-xl" />
            </div>
            <h3 className="text-2xl font-semibold tracking-wide">Backend</h3>
          </div>
          <p className="mt-3 text-sm tracking-widest">
            APIs limpias, auth, datos y despliegue.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <TextPill text="Node.js"/>
            <TextPill text="Express"/>
            <TextPill text="REST API"/>
            <TextPill text="SQL"/>
            <TextPill text="NoSQL"/>
          </div>
        </div>
      </div>
      <div className="max-w-[450px] md:max-w-6xl mx-auto mt-14 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-10 place-items-center relative z-10">
        <Circle bg="bg-[#E44D26]" label="HTML" labelClass="text-[#E44D26]">
          <FontAwesomeIcon icon={faHtml5} className="text-5xl text-white" />
        </Circle>

        <Circle bg="bg-[#2965F1]" label="CSS" labelClass="text-[#2965F1]">
          <FontAwesomeIcon icon={faCss3Alt} className="text-5xl text-white" />
        </Circle>

        <Circle bg="bg-[#3178C6]" label="TS" labelClass="text-[#3178C6]">
          <FontAwesomeIcon icon={faCode} className="text-5xl text-white" />
        </Circle>

        <Circle bg="bg-[#61DAFB]" label="REACT" labelClass="text-[#61DAFB]">
          <FontAwesomeIcon icon={faReact} className="text-5xl text-[#0B1E2D]" />
        </Circle>

        <Circle bg="bg-[#000000]" label="NEXT.JS" labelClass="text-white">
          <FontAwesomeIcon icon={faCubes} className="text-5xl text-white" />
        </Circle>

        <Circle bg="bg-[#38BDF8]" label="TAILWIND" labelClass="text-[#38BDF8]">
          <FontAwesomeIcon icon={faCode} className="text-5xl text-white" />
        </Circle>

        <Circle bg="bg-[#83CD29]" label="NODE.JS" labelClass="text-[#83CD29]">
          <FontAwesomeIcon icon={faNode} className="text-5xl text-[#143028]" />
        </Circle>

        <Circle bg="bg-[#232323]" label="EXPRESS" labelClass="text-white">
          <FontAwesomeIcon icon={faServer} className="text-5xl text-white" />
        </Circle>

        <Circle bg="bg-[#2563EB]" label="SQL" labelClass="text-[#2563EB]">
          <FontAwesomeIcon icon={faDatabase} className="text-5xl text-white" />
        </Circle>

        <Circle bg="bg-[#10B981]" label="NOSQL" labelClass="text-[#10B981]">
          <FontAwesomeIcon icon={faDatabase} className="text-5xl text-white" />
        </Circle>

        <Circle bg="bg-[#F59E0B]" label="REST API" labelClass="text-[#F59E0B]">
          <FontAwesomeIcon icon={faServer} className="text-5xl text-white" />
        </Circle>

        <Circle bg="bg-[#181717]" label="GIT" labelClass="text-white">
          <FontAwesomeIcon icon={faGitAlt} className="text-5xl text-white" />
        </Circle>
      </div>
    </section>
    );
}

Home.Container = Container;
Home.Hero = HeroSection;
Home.About = AboutSection;
Home.Skills = SkillsSection;

export default Home;