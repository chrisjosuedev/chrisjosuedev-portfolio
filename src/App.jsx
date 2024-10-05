import { JobCard } from './components/JobCard';
import { ProjectCard } from './components/ProjectCard';
import { AboutIcon } from './components/icons/AboutIcon';
import { ExperienceIcon } from './components/icons/ExperienceIcon';
import { ProjectIcon } from './components/icons/ProjectIcon';
import { Header } from './components/ui/Header';
import { NavBar } from './components/ui/NavBar';
import { projects } from './data/projects';
import { workExperience } from './data/workExperience';

export const App = () => {
  return (
    <div className='container-fluid'>
      <NavBar />
      <main className='container'>
        <Header />
        <div className='container main-container' id='experiencia'>
          <div className='row experience'>
            <h2 className='section-title'>
              <ExperienceIcon /> Experiencia Laboral
            </h2>
            <div className='col-md-12'>
              <ul className='timeline'>
                {workExperience.map((job, index) => (
                  <li key={index} className='event'>
                    <JobCard {...job} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='container main-container' id='proyectos'>
          <div className='row'>
            <h2 className='section-title'>
              <ProjectIcon /> Proyectos
            </h2>
          </div>
          <div className='mt-4'>
            <div className='row'>
              {projects.map((project, index) => (
                <div key={index} className='col-md-6 col-xs-6 p-2 project-card'>
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='container main-container' id='sobremi'>
          <div className='row'>
            <h2 className='section-title'>
              {' '}
              <AboutIcon /> Sobre Mi
            </h2>
          </div>
          <div className='row mt-4'>
            <div className='col-md-6 p-4' style={{ marginTop: '20px' }}>
              <p className='title-about'>
                ⚡️ Me llamo Cristhian J. Martínez Lara, soy un Ingeniero y desarrollador{' '}
                <span className='primary-about-text'>Back-End y Full-Stack.</span>
              </p>
              <p className='title-about'>
                👩🏻‍💻 Cuento con experiencia en el análisis, diseño y desarrollo de sistemas, aplicaciones web y APIs.
                Enfocado en la creación e implementación de soluciones únicas, creativas e innovadoras. Enfocado en la
                creación e implementación de soluciones <span className='primary-about-text'> únicas y creativas </span>{' '}
                orientadas a la{' '}
                <span className='primary-about-text'>
                  {' '}
                  resolución de problemas, autodidacta y con alta orientación a la investigación.{' '}
                </span>
              </p>
              <p className='title-about'>
                🧐 Busco oportunidades desafiantes, contribuir al éxito del equipo y sobre todo:{' '}
                <span className='primary-about-text'>Colaborar y estar rodeado de los mejores.</span>{' '}
              </p>
            </div>
            <div className='col-md-6'>
              <img className='about-me-photo rounded-circle' src='/assets/aboutme-2.jpg' alt='aboutme' />
            </div>
          </div>
        </div>
      </main>
      <footer className='footer'>© 2024 Cristhian J. Martínez Lara</footer>
    </div>
  );
};
