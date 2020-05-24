const HERO_UP1 = 'img/up1.png';
const HERO_UP2 = 'img/up2.png';
const HERO_DOWN1 = 'img/down1.png';
const HERO_DOWN2 = 'img/down2.png';
const HERO_LEFT1 = 'img/left1.png';
const HERO_LEFT2 = 'img/left2.png';
const HERO_RIGHT1 = 'img/right1.png';
const HERO_RIGHT2 = 'img/right2.png';

const DEFAULT_SPEED = 20;
const DEFAULT_TOP = 20;
const DEFAULT_LEFT = 30;
const DEFAULT_WIDTH = 70;
const DEFAULT_HEIGHT = 130;

const WINDOW_WIDTH = window.innerWidth;
const WINDOW_HEIGHT = window.innerHeight;

function Hero(image, top, left){
    this.image = image;
    this.top = top;
    this.left = left;
    this.width = DEFAULT_WIDTH;
    this.height = DEFAULT_HEIGHT;
    this.speed = DEFAULT_SPEED;
    this.getHeroElement = function(){
      return '<img width="'+ this.width + '"' +
        ' height="'+ this.height + '"' +
        ' src="' + this.image +'"' +
        ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }
  }
  
  let imgHero = HERO_RIGHT1;
  let status = true;
  let hero = new Hero(imgHero,DEFAULT_TOP,DEFAULT_LEFT);

  function controlHero(){
    debugger;
    switch(event.key){
        case 'Control':
          hero.speed+=5;
          break;
        case 'ArrowUp':
          hero.top -= hero.speed; 
          if (hero.top < 0) hero.top = 0;
          if(status) imgHero = HERO_UP1; else imgHero = HERO_UP2;
          status=!status;
        break;
        case 'ArrowDown':
          hero.top += hero.speed;
          if (hero.top > WINDOW_HEIGHT) hero.top = WINDOW_HEIGHT - DEFAULT_HEIGHT;
          if(status) imgHero = HERO_DOWN1; else imgHero = HERO_DOWN2;
          status=!status;
        break;
        case 'ArrowLeft':
          hero.left -= hero.speed;
          if (hero.left < 0 ) hero.left = 0;
          if(status) imgHero = HERO_LEFT1; else imgHero = HERO_LEFT2;
          status=!status;
        break;
        case 'ArrowRight':
          hero.left += hero.speed;
          if (hero.left > WINDOW_WIDTH) hero.left = WINDOW_WIDTH - DEFAULT_WIDTH;
          if(status) imgHero = HERO_RIGHT1; else imgHero = HERO_RIGHT2;
          status=!status;
        break;
        default: console.log("ERROR CONTROL_HERO")
    }
  }

  
  
  function start(){    
    window.addEventListener('keydown',controlHero);
    hero.image = imgHero;
    let char = hero.getHeroElement();
    document.getElementById('char').innerHTML = char;
    window.requestAnimationFrame(start);
  }
  
  window.requestAnimationFrame(start);