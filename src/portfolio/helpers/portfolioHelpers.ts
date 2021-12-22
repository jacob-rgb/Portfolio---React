export const mostrarElements = () => {

    const elements = document.querySelectorAll(".animaTop");

    const elementsArray = Array.from(elements);

    if(elementsArray.every(element => element.classList.contains('fadeInBot'))) {
        document.removeEventListener('scroll', mostrarElements);
    }

    elementsArray.forEach((element) => {
        const altura = element.getBoundingClientRect().top ;

        const limit = window.innerWidth > 1700 ? 600 : 300

        if(altura < limit) {
            element.classList.add("fadeInBot")
        }
    })

}