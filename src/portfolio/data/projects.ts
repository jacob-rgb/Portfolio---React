interface MainProject {
    img: string,
    title: string,
    tech: string,
    gitUrl: string,
    demoUrl: string,
    description: string,
    position: 'right' | 'left';
}

interface Project {
    title: string,
    description: string,
    gitUrl: string,
    demoUrl: string,
    tech: string;
}

export const mainProjects: MainProject[] = [
    {
        img:'https://res.cloudinary.com/j-r-r-dev/image/upload/v1639947296/Captura_de_pantalla_24_mznc78.png',
        title:'Manuel Rivera - Artist',
        tech:'Angular, Typescript, mongoDB, Mongo Atlas, Node.js, Express, Netlify',
        gitUrl:'https://github.com/jacob-rgb/Mr-website-angular-netlify',
        demoUrl:'https://manuelrivera.netlify.app/',
        position:'left',
        description:'Corporate website of the Spanish artist and painter Manuel Rivera. Learn about the life and work of this great artist, member and founder of the "El Paso" group. Here you will find about his biography and his contribution to the world of art through videos, galleries and other interactive elements.        '
    },
    {
        img:'https://res.cloudinary.com/j-r-r-dev/image/upload/v1620644143/img-proyecto-foro_wptcui.png',
        title:'Foro Neoland',
        tech:'Angular, markdown, typescript, mongoDb, mongoAtlas, Node.js, Express, Heroku',
        gitUrl:'https://github.com/jacob-rgb/proyecto-Foro',
        demoUrl:'https://foro-app-jr.herokuapp.com/home',
        position:'right',
        description:'A forum created to clarify and resolve doubts about topics such as web development, cybersecurity and other topics related to programming. Join us and do your bit to make this small community grow !'
    },
    {
        img:'https://res.cloudinary.com/j-r-r-dev/image/upload/v1637060084/Captura_de_pantalla_22_nncoqp.png',
        title:'Urbans Ecommerce',
        tech:'React, Redux, Javascript, MySQL, SQLServer, Node.js, Express, Heroku',
        gitUrl:'https://github.com/jacob-rgb/react_ecommerce',
        demoUrl:'https://urbancommerce.herokuapp.com/',
        position:'left',
        description:'Ecommerce interface dedicated to the sale of clothing and accessories. You have the possibility to become a member of this community and receive their latest notifications.'
    },
];

export const projects: Project[] = [
    {
        title:'Netflix-clone',
        description:'App that replicates the famous Netflix platform. With functionality to become a member',
        gitUrl: 'https://github.com/jacob-rgb/Clon-Netflix',
        demoUrl: 'https://jacob-rgb.github.io/Clon-Netflix/',
        tech: 'Firesbase, GitHub Pages, Javascript, React, Redux'
    },
    {
        title:'EL Carlitos -  website ',
        description:'Corporate and functional design of a business focused on the hospitality industry.',
        gitUrl: 'https://github.com/jacob-rgb/El-Carlitos-WebSite',
        demoUrl: 'https://barelcarlitos.netlify.app/',
        tech: 'Netlify, Angular, Typescript, Google Analytics, Bootstrap'
    },
    {
        title:'J.Iscar - Psiclogy - Website',
        description:'Corporate and functional design related to the world of educational psychology',
        gitUrl: 'https://github.com/jacob-rgb/Jaime-Iscar-WebSite',
        demoUrl: 'https://jiscarpsicologia.netlify.app/',
        tech: 'Netlify, Angular, Typescript, Google Analytics, Canvas, Bootstrap'
    },
    {
        title:'Space Invaders - Game',
        description:'App in which you can play the mythical game Space-Invaders. Recall the old days !',
        gitUrl: 'https://github.com/jacob-rgb/Space-Invaders-App',
        demoUrl: 'https://space-invaders-jr.herokuapp.com/',
        tech: 'Heroku, NodeJs, Canvas, Javascript'
    },
    {
        title:'Animated Portfolio',
        description:'Animated portfolio focused on the world of web development',
        gitUrl: 'https://github.com/jacob-rgb/Portfolio',
        demoUrl: 'https://portfolio-app-jr.herokuapp.com/',
        tech: 'NodeJs, Heroku, Angular, Typescript, Bootstrap, MongoDB, Mongo Atlas'
    },
    {
        title:'Weather App',
        description:'Small program that allows you to check the weather in different European cities.',
        gitUrl: 'https://github.com/jacob-rgb/app-weather',
        demoUrl: 'https://app-weather-jr.herokuapp.com/',
        tech: 'Heroku, NodeJs, Javascript, Axios'
    },
    {
        title:'Queuing System - Sockets',
        description:'App that simulates the queuing system used in markets, offices and websites.',
        gitUrl: 'https://github.com/jacob-rgb/sistema-de-colas---sockets',
        demoUrl: 'https://sistema-de-colas-app.herokuapp.com/',
        tech: 'Heroku, NodeJs, Javascript, Sockets'
    },
]