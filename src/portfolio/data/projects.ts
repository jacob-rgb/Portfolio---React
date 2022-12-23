interface MainProject {
    img: string,
    title: string,
    tech: string,
    gitUrl: string,
    demoUrl: string,
    description: string,
    descriptionEs:string;
    position: 'right' | 'left';
}

interface Project {
    title: string,
    description: string,
    descriptionEs?: string,
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
        demoUrl:'https://www.manuelrivera.es/',
        position:'left',
        description:'Corporate website of the Spanish artist and painter Manuel Rivera. Learn about the life and work of this great artist, member and founder of the "El Paso" group. Here you will find about his biography and his contribution to the world of art through videos, galleries and other interactive elements.',
        descriptionEs:'Sitio web corporativo del artista y pintor español Manuel Rivera. Aprende a cerca de la vida y el trabajo de este gran artista, miembro y fundado del grupo "El Paso". Aquí podrás encontrar a cerca de su biografía y su contribución al mundo del arte a través de videos, galeías y otos elementos interactivos'
    },
    {
        img:'https://res.cloudinary.com/j-r-r-dev/image/upload/v1620644143/img-proyecto-foro_wptcui.png',
        title:'Foro Neoland',
        tech:'Angular, markdown, typescript, mongoDb, mongoAtlas, Node.js, Express, Heroku',
        gitUrl:'https://github.com/jacob-rgb/proyecto-Foro',
        demoUrl:'https://proyecto-foro.vercel.app/',
        position:'right',
        description:'A forum created to clarify and resolve doubts about topics such as web development, cybersecurity and other topics related to programming. Join us and do your bit to make this small community grow !',
        descriptionEs:'Un Foro creado para aclarar y resolver dudas y cuestiones a cerca del desarrollo web, ciberseguridad y otros temas relacionados a la programación. Únete a nosotros y haz tu contribución para hacer crecer a esta pequeña comunidad !'
    },
    {
        img:'https://res.cloudinary.com/j-r-r-dev/image/upload/v1637060084/Captura_de_pantalla_22_nncoqp.png',
        title:'Urbans Ecommerce',
        tech:'React, Redux, Javascript, MySQL, SQLServer, Node.js, Express, Heroku',
        gitUrl:'https://github.com/jacob-rgb/react_ecommerce',
        demoUrl:'https://urban-commerce.vercel.app/',
        position:'left',
        description:'Ecommerce interface dedicated to the sale of clothing and accessories. You have the possibility to become a member of this community and receive their latest notifications.',
        descriptionEs:'Interfaz de ecommerce dedicada a la venta de ropa y accesorios. Tienes la posibilidad de hacerte miembro de esta comunidad para recibir las últimas noticias.'
    },
];

export const projects: Project[] = [
    {
        title:'Netflix-clone',
        description:'App that replicates the famous Netflix platform. With functionality to become a member.',
        descriptionEs:'App que replica la famosa plataforma de Netflix. Con la funcionalidad de hacerte miembro.',
        gitUrl: 'https://github.com/jacob-rgb/Clon-Netflix',
        demoUrl: 'https://jacob-rgb.github.io/Clon-Netflix/',
        tech: 'Firesbase, GitHub Pages, Javascript, React, Redux'
    },
    {
        title:'EL Carlitos -  website ',
        description:'Corporate and functional design of a business focused on the hospitality indusy.tr',
        descriptionEs:'Diseño corporativo funcional de un negocio enfocado a la hostelería.',
        gitUrl: 'https://github.com/jacob-rgb/El-Carlitos-WebSite',
        demoUrl: 'https://barelcarlitos.netlify.app/',
        tech: 'Netlify, Angular, Typescript, Google Analytics, Bootstrap'
    },
    {
        title:'J.Iscar - Psiclogy - Website',
        description:'Corporate and functional design related to the world of educational psychology.',
        descriptionEs:'Diseño corporativo y funcional dedicado al mundo de la piscología educacional.',
        gitUrl: 'https://github.com/jacob-rgb/Jaime-Iscar-WebSite',
        demoUrl: 'https://jiscarpsicologia.netlify.app/',
        tech: 'Netlify, Angular, Typescript, Google Analytics, Canvas, Bootstrap'
    },
    {
        title:'Space Invaders - Game',
        description:'App in which you can play the mythical game Space-Invaders. Recall the old times !',
        descriptionEs:' App en la que puedes jugar al mítico juego de Space Invaders. Rememora los viejos tiempos !',
        gitUrl: 'https://github.com/jacob-rgb/Space-Invaders-App',
        demoUrl: 'https://space-invaders-jr.herokuapp.com/',
        tech: 'Heroku, NodeJs, Canvas, Javascript'
    },
    {
        title:'Animated Portfolio',
        description:'Animated portfolio focused on the world of web development',
        descriptionEs:'Portfolio animado dedicado al mundo del desarrollo web',
        gitUrl: 'https://github.com/jacob-rgb/Portfolio',
        demoUrl: 'https://portfolio-app-jr.herokuapp.com/',
        tech: 'NodeJs, Heroku, Angular, Typescript, Bootstrap, MongoDB, Mongo Atlas'
    },
    {
        title:'Weather App',
        description:'Small program that allows you to check the weather in different european cities.',
        descriptionEs:'Pequeño programa que permite comprobar el tiempo en diferentes ciudades europeas.',
        gitUrl: 'https://github.com/jacob-rgb/app-weather',
        demoUrl: 'https://app-weather-jr.herokuapp.com/',
        tech: 'Heroku, NodeJs, Javascript, Axios'
    },
    {
        title:'Queuing System - Sockets',
        description:'App that simulates the queuing system used in markets, offices and websites.',
        descriptionEs:'App que simula uel sistema de colas usado en supermercados, oficinas y sitios web.',
        gitUrl: 'https://github.com/jacob-rgb/sistema-de-colas---sockets',
        demoUrl: 'https://sistema-de-colas-app.herokuapp.com/',
        tech: 'Heroku, NodeJs, Javascript, Sockets'
    },
    {
        title:'Tetris',
        description:'The mythical Tetris game with which we have shared so many hours.',
        descriptionEs:'El mítico juego del Tetris con el que hemos compartido tantas horas.',
        gitUrl: 'https://github.com/jacob-rgb/Tetris-js',
        demoUrl: 'https://jacob-rgb.github.io/Tetris-js/',
        tech: 'Javascript, CSS3, HTML5'
    },
    {
        title:'TRIVIDABO - Quiz Game',
        description:'Question game with correction system and points. Do you know as much as you think you do? Prove it!',
        descriptionEs:'Juego de preguntas con sistema de correción y puntos. ¿ Sabes tanto como te crees ? Demuéstralo !.',
        gitUrl: 'https://github.com/jacob-rgb/Quiz-game-react',
        demoUrl: 'https://trividabo-quitzgame.netlify.app/',
        tech: 'Javascript, CSS3, HTML5, React, Jest, Node, Express, Heroku'
    },
]