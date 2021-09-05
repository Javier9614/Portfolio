import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Javier Aranda', // e.g: 'Name | Developer'
  lang: 'es', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hola, mi nombre es',
  name: 'Javi',
  subtitle: 'Y soy Fullstack Developer Junior',
  cta: 'Conoce mas de mi',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `Soy una persona curiosa que siempre he estado en contacto con la programación, y por eso opte por cursar un bootcamp para actualizarme y aprender las tecnologías mas solicitadas en el ámbito profesional.
  Soy una persona autodidacta, proactiva, con capacidad de adaptación a diferentes equipos de trabajo y con total movilidad geográfica para incorporarme y contribuir a cualquier proyecto u organización`,
  paragraphTwo: ' ',
  paragraphThree: ' ',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'GifApp',
    info: 'Esta aplicacion la hice para practicar con react la llamada a una api, en este caso GIPHY y este es el resultado final, creo que aprendi mucho gracias a este pequeño proyecto',
    info2: ' ',
    url: 'https://javier9614.github.io/GifApp/',
    repo: 'https://github.com/Javier9614/GifApp', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '¿Quieres que trabajemos juntos?',
  btn: 'Hablemos',
  email: 'javierarandalopez96@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/javierarandalopez',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Javier9614',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
