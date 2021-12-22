export   let prevHeight:number = 0;
export let isOpen: boolean = false;

export const toggleMenu = (theme?: string) => {
    const menu: any = document.querySelector('.navbar .links');
    const bar1: any = document.querySelector('.menuBar1');
    const bar2: any = document.querySelector('.menuBar2');
    const bar3: any = document.querySelector('.menuBar3');

  //   menu.classList.remove('apparecerArriba');
    if(!menu.classList.contains('showMenu'))  {
      isOpen = true;
      menu.classList.add('showMenu') ;
      setTimeout(() => {
        document.querySelector('body')?.addEventListener('click', clickout);
      }, 50);
      bar1.style.transform = 'translateY(4px) rotate(-45deg)';
      bar1.style.background = 'red';
      bar2.style.transform = 'translateX(100px)';
      bar3.style.transform = 'translateY(-3px) rotate(45deg)';
      bar3.style.background = 'red';
    } else {
      isOpen = false;
      menu.classList.remove('showMenu');
      document.querySelector('body')?.removeEventListener('click', clickout);
      bar1.style.transform = 'translateY(-4px) rotate(0deg)';
      bar1.style.background = 'var(--greenC)';
      bar2.style.transform = 'translateX(0px)';
      bar3.style.transform = 'translateY(4px) rotate(0deg)';
      bar3.style.background = 'var(--greenC)';
      if(theme === 'light') {
        bar1.style.background = '#ff9a3e';
        bar3.style.background = '#ff9a3e';
      }
    }
  }


  export const clickout = (e:any) => { 
      if(document.querySelector('.navbar .links')?.contains(e.target)) {
      } else {
        if(document.querySelector('.navbar .links')?.classList.contains('showMenu')) {
          toggleMenu();
        }
      }
  }

  export  const toggleNavbar = () => {

    if(isOpen) return;
        
    const navbar = document.querySelector(".navbar");
    const height = window.scrollY;

    if(height < 50) {
      return navbar?.classList.remove("hidenav");
    }
    if(height < prevHeight) {
      navbar?.classList.remove("hidenav");
    } else {
      navbar?.classList.add("hidenav");
    }
    prevHeight = height;
  }

  export const softScroll = (e:any) => {
    const target = e.target.attributes['data-target'].value;
    if(target) {
      const targetElement: Element | null | any = document.querySelector(`#${target}`);
      const altura:number = targetElement?.offsetTop;
      if(altura) {
        window.scroll({
          top:altura,
          behavior:"smooth"
        })
      }
    }
  } 
