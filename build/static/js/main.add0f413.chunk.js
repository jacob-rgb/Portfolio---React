(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{340:function(e,a,s){},341:function(e,a,s){},342:function(e,a,s){"use strict";s.r(a);var t=s(57),c=s.n(t),i=s(23),r=s(8),n=s(13),l=s(3),o=s(0),d=Object(l.createContext)({}),j=function(e){var a=Object(l.useState)("dark"),s=Object(n.a)(a,2),t=s[0],c=s[1],i=Object(l.useState)("en"),r=Object(n.a)(i,2),j=r[0],b=r[1],h={theme:[t,c],language:[j,b]};return Object(l.useEffect)((function(){var e=localStorage.getItem("theme");e&&c(e);var a=localStorage.getItem("language");a&&b(a)}),[]),Object(o.jsx)(d.Provider,{value:h,children:e.children})},b=0,h=!1,m=function(e){var a,s=document.querySelector(".navbar .links"),t=document.querySelector(".menuBar1"),c=document.querySelector(".menuBar2"),i=document.querySelector(".menuBar3");s.classList.contains("showMenu")?(h=!1,s.classList.remove("showMenu"),null===(a=document.querySelector("body"))||void 0===a||a.removeEventListener("click",x),t.style.transform="translateY(-4px) rotate(0deg)",t.style.background="var(--greenC)",c.style.transform="translateX(0px)",i.style.transform="translateY(4px) rotate(0deg)",i.style.background="var(--greenC)","light"===e&&(t.style.background="#ff9a3e",i.style.background="#ff9a3e")):(h=!0,s.classList.add("showMenu"),setTimeout((function(){var e;null===(e=document.querySelector("body"))||void 0===e||e.addEventListener("click",x)}),50),t.style.transform="translateY(4px) rotate(-45deg)",t.style.background="red",c.style.transform="translateX(100px)",i.style.transform="translateY(-3px) rotate(45deg)",i.style.background="red")},x=function(e){var a,s;(null===(a=document.querySelector(".navbar .links"))||void 0===a?void 0:a.contains(e.target))||(null===(s=document.querySelector(".navbar .links"))||void 0===s?void 0:s.classList.contains("showMenu"))&&m()},p=function(){if(!h){var e=document.querySelector(".navbar"),a=window.scrollY;if(a<50)return null===e||void 0===e?void 0:e.classList.remove("hidenav");a<b?null===e||void 0===e||e.classList.remove("hidenav"):null===e||void 0===e||e.classList.add("hidenav"),b=a}},u=function(e){var a=e.target.attributes["data-target"].value;if(a){var s=document.querySelector("#".concat(a)),t=null===s||void 0===s?void 0:s.offsetTop;t&&window.scroll({top:t,behavior:"smooth"})}},O=s.p+"static/media/logo.37842218.png",g=s.p+"static/media/LogoLight.0b0c104c.png",v=s.p+"static/media/bombillaOn.cec9a0e3.png",N=s.p+"static/media/bombillaOff.d49a9ed6.png",f=s.p+"static/media/bandera-es.506a312d.png",k=s.p+"static/media/bandera-en.5233f022.png",y=(s(64),function(){var e=Object(l.useContext)(d),a=Object(n.a)(e.theme,2),s=a[0],t=a[1],c=Object(n.a)(e.language,2),i=c[0],r=c[1];Object(l.useEffect)((function(){return document.addEventListener("scroll",p),function(){document.removeEventListener("scroll",p)}}),[]);return Object(o.jsxs)("div",{className:"navbar",children:[Object(o.jsx)("div",{className:"logo",children:Object(o.jsx)("button",{className:"logoBtn fadeInTop",children:Object(o.jsx)("img",{src:"dark"===s?O:g,alt:"J.r.r DevSols"})})}),Object(o.jsxs)("div",{className:"links",children:[Object(o.jsxs)("div",{className:"optionsBtns",children:[Object(o.jsx)("button",{id:"themeBtn",type:"button",onClick:function(){"dark"===s?(t("light"),localStorage.setItem("theme","light")):(t("dark"),localStorage.setItem("theme","dark"))},children:Object(o.jsx)("img",{src:"dark"===s?v:N,alt:"theme"})}),Object(o.jsx)("button",{id:"languageBtn",type:"button",onClick:function(){"en"===i?(r("es"),localStorage.setItem("language","es")):(r("en"),localStorage.setItem("language","en"))},children:Object(o.jsx)("img",{src:"en"===i?f:k,alt:"theme"})})]}),Object(o.jsxs)("button",{type:"button",onClick:u,"data-target":"aboutS",style:{animationDelay:".3s"},className:"fadeInTop",children:[Object(o.jsx)("span",{"data-target":"aboutS",children:"01."}),"en"===i?"About":"Sobre M\xed"]}),Object(o.jsxs)("button",{type:"button",onClick:u,"data-target":"experienceS",style:{animationDelay:".5s"},className:"fadeInTop",children:[Object(o.jsx)("span",{"data-target":"experienceS",children:"02."}),"en"===i?"Experience":"Experiencia"]}),Object(o.jsxs)("button",{type:"button",onClick:u,"data-target":"mainProjectS",style:{animationDelay:".7s"},className:"fadeInTop",children:[Object(o.jsx)("span",{"data-target":"mainProjectS",children:"03."}),"en"===i?"Work":"Trabajos"]}),Object(o.jsxs)("button",{type:"button",onClick:u,"data-target":"contactS",style:{animationDelay:".9s"},className:"fadeInTop",children:[Object(o.jsx)("span",{"data-target":"contactS",children:"04."}),"en"===i?"Contact":"Contacto"]}),Object(o.jsx)("a",{href:"/assets/cv.pdf",target:"_blank",style:{animationDelay:"1s"},className:"resumeBtn outlineBtn fadeInTop",children:"en"===i?"Resume":"Curr\xedculum"})]}),Object(o.jsx)("div",{className:"menu-btn",children:Object(o.jsxs)("button",{type:"button",className:"dropdown-toggle",id:"navbarDropdown",onClick:function(){return m(s)},children:[Object(o.jsx)("div",{className:"menuBar1"}),Object(o.jsx)("div",{className:"menuBar2"}),Object(o.jsx)("div",{className:"menuBar3"})]})})]})}),w=(s(65),function(e){var a=e.work,s=e.showIf,t=e.title,c=e.date,i=e.children;return Object(o.jsx)("div",{children:a===s&&Object(o.jsxs)("div",{className:"work","aria-label":"work1",children:[Object(o.jsxs)("h3",{children:[" ",t," ",Object(o.jsxs)("small",{children:[" (",c,") "]})]}),i]})})}),S=function(e){var a=e.language,s=void 0===a?"en":a,t=Object(l.useState)("work1"),c=Object(n.a)(t,2),i=c[0],r=c[1];return Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-2 animaTop",children:Object(o.jsxs)("div",{className:"links",children:[Object(o.jsx)("button",{className:"work ".concat("work1"===i&&"active"),onClick:function(){return r("work1")},children:"El Relator S.L"}),Object(o.jsx)("button",{className:"work ".concat("work2"===i&&"active"),onClick:function(){return r("work2")},children:"Freelance"}),Object(o.jsx)("button",{className:"work ".concat("work3"===i&&"active"),onClick:function(){return r("work3")},children:"Noddus"})]})}),Object(o.jsxs)("div",{className:"col-10 animaTop",children:[Object(o.jsxs)(w,{work:i,showIf:"work1",title:"El Relator S.L",date:"2018-2019",children:[Object(o.jsxs)("p",{children:[Object(o.jsx)("i",{className:"bx bx-caret-right"})," ","en"===s?"Implementation of analysis tools such as Google Analytics.":"Implementaci\xf3n de herramientas de an\xe1lisis como Google Analytics."," "]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("i",{className:"bx bx-caret-right"})," ","en"===s?"Write modern, performant, maintainable code for the client with the objective that the code is clear and easy to understand.":"Crear c\xf3digos modernos, optimizados y mantenibles para el cliente con el objetivo de que sea claro y f\xe1cil de entender."," "]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("i",{className:"bx bx-caret-right"})," ","en"===s?"Design, development and deployment of the website.":"Dise\xf1o, desarrollo y despliegue del sitio web"]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("i",{className:"bx bx-caret-right"})," ","en"===s?"Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Bootstrap, Material UI, Styled Components, Google Analytics, Angular, React,  and Netlify.":"Trabajar con variedad de lenguajes, plataformas y frameworks como Javascript, Typescript, Bootstrap, Material UI, Styled Components, Google Analytics, Angular, React y Netlify, entre otras muchas."]})]}),Object(o.jsxs)(w,{work:i,showIf:"work2",title:"Freelance",date:"2019-2021",children:[Object(o.jsxs)("p",{children:[" ",Object(o.jsx)("i",{className:"bx bx-caret-right"})," ","en"===s?"Write modern, performant, maintainable code for a diverse array of client and internal projects.":"Crear c\xf3digos modernos, optimizados y mantenibles para un grupo diverso de clientes."]}),Object(o.jsxs)("p",{children:[" ",Object(o.jsx)("i",{className:"bx bx-caret-right"})," ","en"===s?"I have worked for different clients, specialized in different areas. For example, psychology, art world, restaurants and digital media.":"He trabajado con diferentes clientes especializados en diferentes \xe1reas. Como por ejempo psicolog\xeda, el mundo del arte, restaurantes y medios digitales"]}),Object(o.jsxs)("p",{children:[" ",Object(o.jsx)("i",{className:"bx bx-caret-right"})," ","en"===s?"Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Bootstrap, Material UI, Google analytics, Firebase, Node.js (Express & Nest.js), MongoDB, MySQL, Angular, React, Netlify and Heroku.":"Trabajar con variedad de lenguajes, plataformas y frameworks como Javascript, Typescript, Bootstrap, Tailwind, Material UI, Google Analytics, Firebase, NodeJs (Express & Nest.js), MongoDB, MySQL, Angular, React, Netlify y Heroku."]}),Object(o.jsxs)("p",{children:[" ",Object(o.jsx)("i",{className:"bx bx-caret-right"})," "," en"===s?"Database design, development and deployment using technologies such as MySqlServer, Mongo Atlas, Clever Cloud, etc.":"Dise\xf1o, desarrollo y despliegue de bases de datos usando tecnolog\xedas como MySQLServer, Mongo Atlas, Clever Cloud, etc."," "]})]}),Object(o.jsxs)(w,{work:i,showIf:"work3",title:"Noddus",date:"2021-Present",children:[Object(o.jsxs)("p",{children:[" ",Object(o.jsx)("i",{className:"bx bx-caret-right"})," ","en"===s?"Write modern, performant, maintainable code for a diverse array of client and internal projects.":"Crear c\xf3digos modernos, optimizados y mantenibles para diversos clientes."]}),Object(o.jsxs)("p",{children:[" ",Object(o.jsx)("i",{className:"bx bx-caret-right"})," ","en"===s?"Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Angular, Vue, NodeJs, Express and Nest.js":"Trabajar con variedad de lenguajes, plataformas y frameworks diferentes como Javascript, Typescript, Gatsby, React, Angular, Vue, NodeJs, Express and Nest.js."," "]}),Object(o.jsxs)("p",{children:[" ",Object(o.jsx)("i",{className:"bx bx-caret-right"})," ","en"===s?"Maintain contact with the design team to develop different projects in the most optimal way.":"Mantener el contacto con los dise\xf1adores para desarrollar proyectos lo m\xe1s optimizados posible."]}),Object(o.jsxs)("p",{children:[" ",Object(o.jsx)("i",{className:"bx bx-caret-right"})," ","en"===s?"National and international projects for different media such as El Espa\xf1ol, El Mundo, AS, Prensa Ib\xe9rica ...":"Ptoyectos nacionales e internacionales para diferentes medios como El Espa\xf1ol, El Mundo, ABC, AS..."]})]})]})]})},I=function(e){var a=e.img,s=e.title,t=e.tech,c=e.position,i=void 0===c?"left":c,r=e.gitUrl,n=e.demoUrl,l=e.children;return Object(o.jsx)("div",{className:"main-card animaTop ".concat("right"===i&&"reverseCard"),children:Object(o.jsxs)("div",{className:"main-card-cont",children:[Object(o.jsx)("div",{className:"image",children:Object(o.jsx)("a",{href:"2we",children:Object(o.jsx)("img",{src:a,alt:s})})}),Object(o.jsxs)("div",{className:"info",children:[Object(o.jsxs)("div",{className:"infoHeader",children:[Object(o.jsx)("span",{children:"Featured Project"}),Object(o.jsx)("span",{className:"infoTitle",children:s})]}),Object(o.jsx)("div",{className:"description",children:l}),Object(o.jsx)("div",{className:"tech",children:t}),Object(o.jsxs)("div",{className:"buttons",children:[Object(o.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:Object(o.jsx)("i",{className:"bx bxl-github"})}),Object(o.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:Object(o.jsx)("i",{className:"bx bx-link-external"})})]})]})]})})},A=[{img:"https://res.cloudinary.com/j-r-r-dev/image/upload/v1639947296/Captura_de_pantalla_24_mznc78.png",title:"Manuel Rivera - Artist",tech:"Angular, Typescript, mongoDB, Mongo Atlas, Node.js, Express, Netlify",gitUrl:"https://github.com/jacob-rgb/Mr-website-angular-netlify",demoUrl:"https://manuelrivera.netlify.app/",position:"left",description:'Corporate website of the Spanish artist and painter Manuel Rivera. Learn about the life and work of this great artist, member and founder of the "El Paso" group. Here you will find about his biography and his contribution to the world of art through videos, galleries and other interactive elements.',descriptionEs:'Sitio web corporativo del artista y pintor espa\xf1ol Manuel Rivera. Aprende a cerca de la vida y el trabajo de este gran artista, miembro y fundado del grupo "El Paso". Aqu\xed podr\xe1s encontrar a cerca de su biograf\xeda y su contribuci\xf3n al mundo del arte a trav\xe9s de videos, gale\xedas y otos elementos interactivos'},{img:"https://res.cloudinary.com/j-r-r-dev/image/upload/v1620644143/img-proyecto-foro_wptcui.png",title:"Foro Neoland",tech:"Angular, markdown, typescript, mongoDb, mongoAtlas, Node.js, Express, Heroku",gitUrl:"https://github.com/jacob-rgb/proyecto-Foro",demoUrl:"https://foro-app-jr.herokuapp.com/home",position:"right",description:"A forum created to clarify and resolve doubts about topics such as web development, cybersecurity and other topics related to programming. Join us and do your bit to make this small community grow !",descriptionEs:"Un Foro creado para aclarar y resolver dudas y cuestiones a cerca del desarrollo web, ciberseguridad y otros temas relacionados a la programaci\xf3n. \xdanete a nosotros y haz tu contribuci\xf3n para hacer crecer a esta peque\xf1a comunidad !"},{img:"https://res.cloudinary.com/j-r-r-dev/image/upload/v1637060084/Captura_de_pantalla_22_nncoqp.png",title:"Urbans Ecommerce",tech:"React, Redux, Javascript, MySQL, SQLServer, Node.js, Express, Heroku",gitUrl:"https://github.com/jacob-rgb/react_ecommerce",demoUrl:"https://urbancommerce.herokuapp.com/",position:"left",description:"Ecommerce interface dedicated to the sale of clothing and accessories. You have the possibility to become a member of this community and receive their latest notifications.",descriptionEs:"Interfaz de ecommerce dedicada a la venta de ropa y accesorios. Tienes la posibilidad de hacerte miembro de esta comunidad para recibir las \xfaltimas noticias."}],C=[{title:"Netflix-clone",description:"App that replicates the famous Netflix platform. With functionality to become a member.",descriptionEs:"App que replica la famosa plataforma de Netflix. Con la funcionalidad de hacerte miembro.",gitUrl:"https://github.com/jacob-rgb/Clon-Netflix",demoUrl:"https://jacob-rgb.github.io/Clon-Netflix/",tech:"Firesbase, GitHub Pages, Javascript, React, Redux"},{title:"EL Carlitos -  website ",description:"Corporate and functional design of a business focused on the hospitality indusy.tr",descriptionEs:"Dise\xf1o corporativo funcional de un negocio enfocado a la hosteler\xeda.",gitUrl:"https://github.com/jacob-rgb/El-Carlitos-WebSite",demoUrl:"https://barelcarlitos.netlify.app/",tech:"Netlify, Angular, Typescript, Google Analytics, Bootstrap"},{title:"J.Iscar - Psiclogy - Website",description:"Corporate and functional design related to the world of educational psychology.",descriptionEs:"Dise\xf1o corporativo y funcional dedicado al mundo de la piscolog\xeda educacional.",gitUrl:"https://github.com/jacob-rgb/Jaime-Iscar-WebSite",demoUrl:"https://jiscarpsicologia.netlify.app/",tech:"Netlify, Angular, Typescript, Google Analytics, Canvas, Bootstrap"},{title:"Space Invaders - Game",description:"App in which you can play the mythical game Space-Invaders. Recall the old times !",descriptionEs:" App en la que puedes jugar al m\xedtico juego de Space Invaders. Rememora los viejos tiempos !",gitUrl:"https://github.com/jacob-rgb/Space-Invaders-App",demoUrl:"https://space-invaders-jr.herokuapp.com/",tech:"Heroku, NodeJs, Canvas, Javascript"},{title:"Animated Portfolio",description:"Animated portfolio focused on the world of web development",descriptionEs:"Portfolio animado dedicado al mundo del desarrollo web",gitUrl:"https://github.com/jacob-rgb/Portfolio",demoUrl:"https://portfolio-app-jr.herokuapp.com/",tech:"NodeJs, Heroku, Angular, Typescript, Bootstrap, MongoDB, Mongo Atlas"},{title:"Weather App",description:"Small program that allows you to check the weather in different european cities.",descriptionEs:"Peque\xf1o programa que permite comprobar el tiempo en diferentes ciudades europeas.",gitUrl:"https://github.com/jacob-rgb/app-weather",demoUrl:"https://app-weather-jr.herokuapp.com/",tech:"Heroku, NodeJs, Javascript, Axios"},{title:"Queuing System - Sockets",description:"App that simulates the queuing system used in markets, offices and websites.",descriptionEs:"App que simula uel sistema de colas usado en supermercados, oficinas y sitios web.",gitUrl:"https://github.com/jacob-rgb/sistema-de-colas---sockets",demoUrl:"https://sistema-de-colas-app.herokuapp.com/",tech:"Heroku, NodeJs, Javascript, Sockets"}],E=(s(66),function(e){var a=e.language,s=void 0===a?"en":a;return Object(o.jsx)("div",{children:A.map((function(e){return Object(o.jsx)(I,{img:e.img,title:e.title,tech:e.tech,gitUrl:e.gitUrl,demoUrl:e.demoUrl,position:e.position,children:Object(o.jsx)("p",{children:"en"===s?e.description:e.descriptionEs})},e.title)}))})}),T=function(e){var a=e.title,s=e.techs,t=e.gitUrl,c=e.demoUrl,i=e.children,r=e.delayAnimation,n=Object(l.useCallback)((function(){return window.innerWidth}),[]);return Object(o.jsx)("div",{style:{animationDelay:"".concat(n()<700||r>=1.2?"0s":"".concat(r,"s"))},className:"animaTop",children:Object(o.jsxs)("div",{className:"project-card",children:[Object(o.jsxs)("div",{className:"project-header",children:[Object(o.jsx)("div",{className:"file",children:Object(o.jsx)("i",{className:"bx bx-folder"})}),Object(o.jsxs)("div",{className:"buttons",children:[Object(o.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:Object(o.jsx)("i",{className:"bx bxl-github"})}),Object(o.jsx)("a",{href:c,target:"_blank",rel:"noreferrer",children:Object(o.jsx)("i",{className:"bx bx-link-external"})})]})]}),Object(o.jsx)("div",{className:"projectTitle",children:Object(o.jsx)("h3",{children:a})}),Object(o.jsx)("div",{className:"description",children:i}),Object(o.jsx)("div",{className:"techs",children:Object(o.jsxs)("p",{children:[s," "]})})]})})},B=(s(67),function e(){var a=document.querySelectorAll(".animaTop"),s=Array.from(a);s.every((function(e){return e.classList.contains("fadeInBot")}))&&document.removeEventListener("scroll",e),s.forEach((function(e){e.getBoundingClientRect().top<(window.innerWidth>1700?600:300)&&e.classList.add("fadeInBot")}))}),M=function(e){var a=e.language,s=void 0===a?"en":a,t=Object(l.useState)(6),c=Object(n.a)(t,2),i=c[0],r=c[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"projects-container",children:C.slice(0,i).map((function(e,a){var t=e.title,c=e.description,i=e.descriptionEs,r=e.tech,n=e.gitUrl,l=e.demoUrl;return Object(o.jsx)(T,{title:t,techs:r,gitUrl:n,demoUrl:l,delayAnimation:.2*a,children:Object(o.jsx)("p",{children:"en"===s?c:i})},t)}))}),Object(o.jsx)("div",{className:"buttonShow",children:Object(o.jsx)("button",{onClick:function(){i>6&&r(6),i<=6&&(r(12),setTimeout((function(){B()}),0),document.addEventListener("scroll",B))},children:"".concat(i<=6?"en"===s?"Show More":"Mostrar M\xe1s":"en"===s?"Show Less":"Mostrar Menos")})})]})},U=s(58),D=s.n(U),J=function(e){var a=e.language,s=void 0===a?"en":a;return Object(o.jsxs)("section",{className:"header",children:[Object(o.jsx)(D.a,{style:{position:"relative",zIndex:"-1"},id:"tsparticles",init:function(e){},loaded:function(e){},options:{background:{color:{value:"transparent"}},fpsLimit:60,interactivity:{events:{onClick:{enable:!1,mode:"push"},onHover:{enable:!0,mode:"repulse"},resize:!0},modes:{bubble:{distance:400,duration:2,opacity:.8,size:40},push:{quantity:2},repulse:{distance:150,duration:.4}}},particles:{color:{value:"#ffffff"},links:{color:"#ffffff",distance:150,enable:!0,opacity:.3,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:1,straight:!1},number:{density:{enable:!0,value_area:1500},value:80},opacity:{value:.5},shape:{type:"square"},size:{random:!0,value:5}},detectRetina:!0}}),Object(o.jsx)("span",{style:{animationDelay:"1.1s"},className:"animaTop mono fadeInBot",children:"en"===s?"Hi, my name is":"Hola, mi nombre es"}),Object(o.jsx)("h4",{style:{animationDelay:"1.3s"},className:"animaTop fadeInBot",children:"Jacobo Ram\xedrez."}),Object(o.jsx)("h4",{style:{animationDelay:"1.5s"},className:"animaTop fadeInBot",children:"en"===s?"I build fantastic experiences for the web.":"Construyo experiencias web."}),Object(o.jsxs)("p",{style:{animationDelay:"1.7s"},className:"animaTop fadeInBot",children:["en"===s?"I\xb4m a fullstack developer with more than two years of experience building (and occasionally designin) exceptional digital experiences.":"Soy un fullstack developer con m\xe1s de dos a\xf1os de experiencia desarrollando (y en ocasiones dise\xf1ando) experiencias digitales excepcionales."," "]}),Object(o.jsx)("button",{style:{animationDelay:"1.8s"},className:"animaTop outlineBtn checkBtn fadeInBot","data-target":"mainProjectS",onClick:u,children:"en"===s?"Check My Works":"Ojea Mis Trabajos"})]})},L=(s(340),function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{style:{animationDelay:"1.9s"},className:"sideBars side-left fadeInBot",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{rel:"noreferrer",href:"https://www.facebook.com/",target:"_blank",children:Object(o.jsx)("i",{className:"bx bxl-facebook"})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{rel:"noreferrer",href:"https://api.whatsapp.com/send?phone=34666129008",target:"_blank",children:Object(o.jsx)("i",{className:"bx bxl-whatsapp"})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{rel:"noreferrer",href:"mailto:jacoboramirezrivera6@gmail.com",target:"_blank",children:Object(o.jsx)("i",{className:"bx bxl-gmail"})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{rel:"noreferrer",href:"https://github.com/jacob-rgb",target:"_blank",children:Object(o.jsx)("i",{className:"bx bxl-github"})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{rel:"noreferrer",href:"https://www.linkedin.com/in/jacobo-ram%C3%ADrez-rivera-1a6b691b5/",target:"_blank",children:Object(o.jsx)("i",{className:"bx bxl-linkedin"})})})]})}),Object(o.jsx)("div",{style:{animationDelay:"2s"},className:"sideBars side-right fadeInBot",children:Object(o.jsx)("div",{className:"email mono",children:Object(o.jsx)("a",{href:"mailto:jacoboramirezrivera6@gmail.com",children:"jacoboramirezrivera6@gmail.com"})})})]})}),q=s.p+"static/media/fotoperfil2.1373a8a3.png",z=function(e){var a=e.language,s=void 0===a?"en":a;return Object(o.jsxs)("div",{className:"row animaTop",children:[Object(o.jsxs)("div",{className:"col-8",children:[Object(o.jsx)("p",{className:"fadeInBot",children:"en"===s?"Hello! My name is Jacobo Ram\xedrez and i enjoy creating things that live on the internet. My interest in web development started back in 2017 when i decided to try building a simple website for a business.":"Hola, Mi nombre es Jacobo Ram\xedrez y me encanta crear aplicaciones multiplataforma. Mi inter\xe9s en el desarrollo web comenz\xf3 en 2017 cuando decid\xed montar un sitio web para un negocio."}),Object(o.jsxs)("p",{className:"fadeInBot",children:["en"===s?"It was then when I decided to study web development.Nowadays i' ve had the priviliege of working at":"Fue entonces cuando decid\xed estudiar desarrollo de aplicaciones multiplataforma. Hoy en d\xeda he tenido el privilegio de trabajar con ",Object(o.jsxs)("span",{className:"text-green ",children:[" ","en"===s?"an advertising agency, a start-up and a media-web agency":"una agencia de publicidad, una start-up y una agencia de media-web"," "]}),"en"===s?"My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.":"Mi principal dedicac\xedon a d\xeda de hoy es crear aplicaciones tanto accesibles como optimizadas y experiencias digitales para una variedad de clientes."]}),Object(o.jsx)("p",{className:"fadeInBot",children:"en"===s?"Here are a few technologies I\u2019ve been working with recently : ":"Estas son algunas de las tecnolog\xedas que estoy usando para trabajar : "}),Object(o.jsxs)("ul",{className:"skills-box",children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{children:Object(o.jsx)("i",{className:"bx bx-caret-right"})})," Javascript (ES6+)"]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{children:Object(o.jsx)("i",{className:"bx bx-caret-right"})})," TypeScript"]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{children:Object(o.jsx)("i",{className:"bx bx-caret-right"})})," React"]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{children:Object(o.jsx)("i",{className:"bx bx-caret-right"})})," React Native"]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{children:Object(o.jsx)("i",{className:"bx bx-caret-right"})})," Angular"]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{children:Object(o.jsx)("i",{className:"bx bx-caret-right"})})," Ionic"]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{children:Object(o.jsx)("i",{className:"bx bx-caret-right"})})," Vue & Vuex"]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{children:Object(o.jsx)("i",{className:"bx bx-caret-right"})})," Node.js"]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{children:Object(o.jsx)("i",{className:"bx bx-caret-right"})})," Nest.js"]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{children:Object(o.jsx)("i",{className:"bx bx-caret-right"})})," Express"]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{children:Object(o.jsx)("i",{className:"bx bx-caret-right"})})," Web sockets"]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{children:Object(o.jsx)("i",{className:"bx bx-caret-right"})})," Webpack"]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{children:Object(o.jsx)("i",{className:"bx bx-caret-right"})})," HTML & CSS"]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{children:Object(o.jsx)("i",{className:"bx bx-caret-right"})})," Git & Github"]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{children:Object(o.jsx)("i",{className:"bx bx-caret-right"})})," mySQL, Postgres"]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{children:Object(o.jsx)("i",{className:"bx bx-caret-right"})})," MongoDB"]})]})]}),Object(o.jsx)("div",{className:"col-4",children:Object(o.jsx)("div",{className:"img-cont",children:Object(o.jsx)("img",{src:q,alt:"Foto Perfil"})})})]})},R=(s(341),function(){return Object(o.jsx)("div",{className:"loading-container",children:Object(o.jsxs)("div",{className:"socket",children:[Object(o.jsxs)("div",{className:"gel center-gel",children:[Object(o.jsx)("div",{className:"hex-brick h1"}),Object(o.jsx)("div",{className:"hex-brick h2"}),Object(o.jsx)("div",{className:"hex-brick h3"})]}),Object(o.jsxs)("div",{className:"gel c1 r1",children:[Object(o.jsx)("div",{className:"hex-brick h1"}),Object(o.jsx)("div",{className:"hex-brick h2"}),Object(o.jsx)("div",{className:"hex-brick h3"})]}),Object(o.jsxs)("div",{className:"gel c2 r1",children:[Object(o.jsx)("div",{className:"hex-brick h1"}),Object(o.jsx)("div",{className:"hex-brick h2"}),Object(o.jsx)("div",{className:"hex-brick h3"})]}),Object(o.jsxs)("div",{className:"gel c3 r1",children:[Object(o.jsx)("div",{className:"hex-brick h1"}),Object(o.jsx)("div",{className:"hex-brick h2"}),Object(o.jsx)("div",{className:"hex-brick h3"})]}),Object(o.jsxs)("div",{className:"gel c4 r1",children:[Object(o.jsx)("div",{className:"hex-brick h1"}),Object(o.jsx)("div",{className:"hex-brick h2"}),Object(o.jsx)("div",{className:"hex-brick h3"})]}),Object(o.jsxs)("div",{className:"gel c5 r1",children:[Object(o.jsx)("div",{className:"hex-brick h1"}),Object(o.jsx)("div",{className:"hex-brick h2"}),Object(o.jsx)("div",{className:"hex-brick h3"})]}),Object(o.jsxs)("div",{className:"gel c6 r1",children:[Object(o.jsx)("div",{className:"hex-brick h1"}),Object(o.jsx)("div",{className:"hex-brick h2"}),Object(o.jsx)("div",{className:"hex-brick h3"})]}),Object(o.jsxs)("div",{className:"gel c7 r2",children:[Object(o.jsx)("div",{className:"hex-brick h1"}),Object(o.jsx)("div",{className:"hex-brick h2"}),Object(o.jsx)("div",{className:"hex-brick h3"})]}),Object(o.jsxs)("div",{className:"gel c8 r2",children:[Object(o.jsx)("div",{className:"hex-brick h1"}),Object(o.jsx)("div",{className:"hex-brick h2"}),Object(o.jsx)("div",{className:"hex-brick h3"})]}),Object(o.jsxs)("div",{className:"gel c9 r2",children:[Object(o.jsx)("div",{className:"hex-brick h1"}),Object(o.jsx)("div",{className:"hex-brick h2"}),Object(o.jsx)("div",{className:"hex-brick h3"})]}),Object(o.jsxs)("div",{className:"gel c10 r2",children:[Object(o.jsx)("div",{className:"hex-brick h1"}),Object(o.jsx)("div",{className:"hex-brick h2"}),Object(o.jsx)("div",{className:"hex-brick h3"})]}),Object(o.jsxs)("div",{className:"gel c11 r2",children:[Object(o.jsx)("div",{className:"hex-brick h1"}),Object(o.jsx)("div",{className:"hex-brick h2"}),Object(o.jsx)("div",{className:"hex-brick h3"})]}),Object(o.jsxs)("div",{className:"gel c12 r2",children:[Object(o.jsx)("div",{className:"hex-brick h1"}),Object(o.jsx)("div",{className:"hex-brick h2"}),Object(o.jsx)("div",{className:"hex-brick h3"})]}),Object(o.jsxs)("div",{className:"gel c13 r2",children:[Object(o.jsx)("div",{className:"hex-brick h1"}),Object(o.jsx)("div",{className:"hex-brick h2"}),Object(o.jsx)("div",{className:"hex-brick h3"})]}),Object(o.jsxs)("div",{className:"gel c14 r2",children:[Object(o.jsx)("div",{className:"hex-brick h1"}),Object(o.jsx)("div",{className:"hex-brick h2"}),Object(o.jsx)("div",{className:"hex-brick h3"})]}),Object(o.jsxs)("div",{className:"gel c15 r2",children:[Object(o.jsx)("div",{className:"hex-brick h1"}),Object(o.jsx)("div",{className:"hex-brick h2"}),Object(o.jsx)("div",{className:"hex-brick h3"})]}),Object(o.jsxs)("div",{className:"gel c16 r2",children:[Object(o.jsx)("div",{className:"hex-brick h1"}),Object(o.jsx)("div",{className:"hex-brick h2"}),Object(o.jsx)("div",{className:"hex-brick h3"})]}),Object(o.jsxs)("div",{className:"gel c17 r2",children:[Object(o.jsx)("div",{className:"hex-brick h1"}),Object(o.jsx)("div",{className:"hex-brick h2"}),Object(o.jsx)("div",{className:"hex-brick h3"})]}),Object(o.jsxs)("div",{className:"gel c18 r2",children:[Object(o.jsx)("div",{className:"hex-brick h1"}),Object(o.jsx)("div",{className:"hex-brick h2"}),Object(o.jsx)("div",{className:"hex-brick h3"})]}),Object(o.jsxs)("div",{className:"gel c19 r3",children:[Object(o.jsx)("div",{className:"hex-brick h1"}),Object(o.jsx)("div",{className:"hex-brick h2"}),Object(o.jsx)("div",{className:"hex-brick h3"})]}),Object(o.jsxs)("div",{className:"gel c20 r3",children:[Object(o.jsx)("div",{className:"hex-brick h1"}),Object(o.jsx)("div",{className:"hex-brick h2"}),Object(o.jsx)("div",{className:"hex-brick h3"})]}),Object(o.jsxs)("div",{className:"gel c21 r3",children:[Object(o.jsx)("div",{className:"hex-brick h1"}),Object(o.jsx)("div",{className:"hex-brick h2"}),Object(o.jsx)("div",{className:"hex-brick h3"})]}),Object(o.jsxs)("div",{className:"gel c22 r3",children:[Object(o.jsx)("div",{className:"hex-brick h1"}),Object(o.jsx)("div",{className:"hex-brick h2"}),Object(o.jsx)("div",{className:"hex-brick h3"})]}),Object(o.jsxs)("div",{className:"gel c23 r3",children:[Object(o.jsx)("div",{className:"hex-brick h1"}),Object(o.jsx)("div",{className:"hex-brick h2"}),Object(o.jsx)("div",{className:"hex-brick h3"})]}),Object(o.jsxs)("div",{className:"gel c24 r3",children:[Object(o.jsx)("div",{className:"hex-brick h1"}),Object(o.jsx)("div",{className:"hex-brick h2"}),Object(o.jsx)("div",{className:"hex-brick h3"})]}),Object(o.jsxs)("div",{className:"gel c25 r3",children:[Object(o.jsx)("div",{className:"hex-brick h1"}),Object(o.jsx)("div",{className:"hex-brick h2"}),Object(o.jsx)("div",{className:"hex-brick h3"})]}),Object(o.jsxs)("div",{className:"gel c26 r3",children:[Object(o.jsx)("div",{className:"hex-brick h1"}),Object(o.jsx)("div",{className:"hex-brick h2"}),Object(o.jsx)("div",{className:"hex-brick h3"})]}),Object(o.jsxs)("div",{className:"gel c28 r3",children:[Object(o.jsx)("div",{className:"hex-brick h1"}),Object(o.jsx)("div",{className:"hex-brick h2"}),Object(o.jsx)("div",{className:"hex-brick h3"})]}),Object(o.jsxs)("div",{className:"gel c29 r3",children:[Object(o.jsx)("div",{className:"hex-brick h1"}),Object(o.jsx)("div",{className:"hex-brick h2"}),Object(o.jsx)("div",{className:"hex-brick h3"})]}),Object(o.jsxs)("div",{className:"gel c30 r3",children:[Object(o.jsx)("div",{className:"hex-brick h1"}),Object(o.jsx)("div",{className:"hex-brick h2"}),Object(o.jsx)("div",{className:"hex-brick h3"})]}),Object(o.jsxs)("div",{className:"gel c31 r3",children:[Object(o.jsx)("div",{className:"hex-brick h1"}),Object(o.jsx)("div",{className:"hex-brick h2"}),Object(o.jsx)("div",{className:"hex-brick h3"})]}),Object(o.jsxs)("div",{className:"gel c32 r3",children:[Object(o.jsx)("div",{className:"hex-brick h1"}),Object(o.jsx)("div",{className:"hex-brick h2"}),Object(o.jsx)("div",{className:"hex-brick h3"})]}),Object(o.jsxs)("div",{className:"gel c33 r3",children:[Object(o.jsx)("div",{className:"hex-brick h1"}),Object(o.jsx)("div",{className:"hex-brick h2"}),Object(o.jsx)("div",{className:"hex-brick h3"})]}),Object(o.jsxs)("div",{className:"gel c34 r3",children:[Object(o.jsx)("div",{className:"hex-brick h1"}),Object(o.jsx)("div",{className:"hex-brick h2"}),Object(o.jsx)("div",{className:"hex-brick h3"})]}),Object(o.jsxs)("div",{className:"gel c35 r3",children:[Object(o.jsx)("div",{className:"hex-brick h1"}),Object(o.jsx)("div",{className:"hex-brick h2"}),Object(o.jsx)("div",{className:"hex-brick h3"})]}),Object(o.jsxs)("div",{className:"gel c36 r3",children:[Object(o.jsx)("div",{className:"hex-brick h1"}),Object(o.jsx)("div",{className:"hex-brick h2"}),Object(o.jsx)("div",{className:"hex-brick h3"})]}),Object(o.jsxs)("div",{className:"gel c37 r3",children:[Object(o.jsx)("div",{className:"hex-brick h1"}),Object(o.jsx)("div",{className:"hex-brick h2"}),Object(o.jsx)("div",{className:"hex-brick h3"})]})]})})}),_=function(e){var a=e.language,s=void 0===a?"en":a;return Object(o.jsxs)("footer",{className:"mono",children:[Object(o.jsx)("div",{className:"media-box",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{rel:"noreferrer",href:"https://www.facebook.com/",target:"_blank",children:Object(o.jsx)("i",{className:"bx bxl-facebook"})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{rel:"noreferrer",href:"https://api.whatsapp.com/send?phone=34666129008",target:"_blank",children:Object(o.jsx)("i",{className:"bx bxl-whatsapp"})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{rel:"noreferrer",href:"mailto:jacoboramirezrivera6@gmail.com",target:"_blank",children:Object(o.jsx)("i",{className:"bx bxl-gmail"})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{rel:"noreferrer",href:"https://github.com/jacob-rgb",target:"_blank",children:Object(o.jsx)("i",{className:"bx bxl-github"})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{rel:"noreferrer",href:"https://www.linkedin.com/in/jacobo-ram%C3%ADrez-rivera-1a6b691b5/",target:"_blank",children:Object(o.jsx)("i",{className:"bx bxl-linkedin"})})})]})}),Object(o.jsx)("p",{children:"en"===s?"Designed & Built by Jacobo Ram\xedrez":"Dise\xf1ado y Desarrollado por Jacobo Ram\xedrez"})]})},P=(s(56),function(){return Object(l.useEffect)((function(){return document.title="Not Found | Jacobo Ram\xedrez",function(){}}),[]),Object(o.jsxs)("div",{className:"main",children:[Object(o.jsx)(y,{}),Object(o.jsx)(L,{}),Object(o.jsxs)("div",{className:"notFound",children:[Object(o.jsx)("h2",{children:"404"}),Object(o.jsx)("h3",{children:"Page Not Found"}),Object(o.jsx)(i.b,{className:"outlineBtn mono button",to:"/",children:"Go Home"})]}),Object(o.jsx)(_,{})]})}),H=function(){var e=Object(l.useContext)(d),a=Object(n.a)(e.theme,1)[0],s=Object(n.a)(e.language,1)[0],t=Object(l.useState)(!0),c=Object(n.a)(t,2),i=c[0],r=c[1];return Object(l.useEffect)((function(){return document.title="Jacobo Ram\xedrez",setTimeout((function(){r(!1)}),3e3),document.addEventListener("scroll",B),function(){document.removeEventListener("scroll",B)}}),[]),Object(o.jsxs)(o.Fragment,{children:[i&&Object(o.jsx)("div",{className:"main ".concat("light"===a&&"light"),children:Object(o.jsx)(R,{})}),!i&&Object(o.jsxs)("div",{className:"main ".concat("light"===a&&"light"),children:[Object(o.jsx)(y,{}),Object(o.jsx)(L,{}),Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)(J,{language:s}),Object(o.jsxs)("section",{className:"about animaTop",id:"aboutS",children:[Object(o.jsxs)("h2",{className:"title",children:[Object(o.jsx)("span",{children:"01. "}),"en"===s?"About me":"Sobre m\xed"]}),Object(o.jsx)(z,{language:s})]}),Object(o.jsx)("section",{className:"experience",id:"experienceS",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("h2",{className:"title animaTop",children:[Object(o.jsx)("span",{children:"02. "}),"en"===s?"Where i've Worked":"Donde He Trabajado"]}),Object(o.jsx)(S,{language:s})]})}),Object(o.jsx)("section",{className:"mainProject",id:"mainProjectS",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("h2",{className:"title animaTop",children:[Object(o.jsx)("span",{children:"03. "}),"en"===s?"Some Things I've Built":"Algunos Proyectos que he desarrollado"]}),Object(o.jsx)(E,{language:s})]})}),Object(o.jsx)("section",{className:"projects",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h2",{className:"subtitle animaTop",children:"en"===s?"Other Noteworthy Projects":"Otros Proyectos"}),Object(o.jsx)(M,{language:s})]})}),Object(o.jsxs)("section",{className:"contact",id:"contactS",children:[Object(o.jsxs)("span",{className:"pretitle mono animaTop",children:["04. ","en"===s?"What's Next":"Qu\xe9 es lo siguiente"," ?"]}),Object(o.jsx)("h2",{className:"animaTop",children:"en"===s?"Get In Touch":"Ponte en contacto"}),Object(o.jsx)("p",{className:"animaTop",children:"en"===s?"Although I\u2019m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I\u2019ll try my best to get back to you!":"Aunque ahora mismo no est\xe9 buscando nuevas oportunidades, mi bandeja de entrada est\xe1 siempre abierta. Ya sea que tenga una pregunta o simplemente quiera saludar, \xa1har\xe9 todo lo posible para responderle! "}),Object(o.jsx)("a",{href:"mailto:jacoboramirezrivera6@gmail.com",className:"outlineBtn mono",children:"en"===s?"Say Hello":"Saludar"})]})]}),Object(o.jsx)(_,{language:s})]})]})},W=function(){return Object(o.jsx)(j,{children:Object(o.jsxs)(r.c,{children:[Object(o.jsx)(r.a,{path:"/",element:Object(o.jsx)(H,{})}),Object(o.jsx)(r.a,{path:"*",element:Object(o.jsx)(P,{})})]})})};c.a.render(Object(o.jsx)(i.a,{children:Object(o.jsx)(W,{})}),document.getElementById("root"))},56:function(e,a,s){},64:function(e,a,s){},65:function(e,a,s){},66:function(e,a,s){},67:function(e,a,s){}},[[342,1,2]]]);
//# sourceMappingURL=main.add0f413.chunk.js.map