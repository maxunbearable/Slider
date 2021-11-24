const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');

const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.container');
const mainSlide = document.querySelector('.main-slide');

const slidesCount = mainSlide.querySelectorAll('div').length;
let activesSlideIndex = 0;

sidebar.style.top = `-${(slidesCount-1)*100}vh`;


upBtn.addEventListener('click', () => {
 changeSlide('up')
})

downBtn.addEventListener('click', () => {
 changeSlide('down')
})

document.addEventListener('keydown', event => {
    if(event.key === 'ArrowUp') {
        changeSlide('up')
    } else if(event.key === 'ArrowDown') {
        changeSlide('down')
    }
})

function changeSlide(direction) {
 if(direction === 'up') {
     activesSlideIndex++;
     if (activesSlideIndex === slidesCount) 
     {
         activesSlideIndex = 0;
     }
 } else if(direction === 'down') {
     activesSlideIndex--;
     if (activesSlideIndex < 0) {
        activesSlideIndex = slidesCount-1;
    }
    
  } 
  if (activesSlideIndex === 1) {
    upBtn.style.background = 'linear-gradient(221.87deg, #f6b300 1%, #75430e 128%)';
    downBtn.style.background = 'linear-gradient(221.87deg, #f6b300 1%, #75430e 128%)';
} else if (activesSlideIndex === 2) {
    upBtn.style.background = 'linear-gradient(215.32deg, #0175db -1%, #01021f 124%)';
    downBtn.style.background = 'linear-gradient(215.32deg, #0175db -1%, #01021f 124%)';
} else if (activesSlideIndex === 3) {
    upBtn.style.background = 'linear-gradient(229.99deg, #22d241 -26%, #1c211d 145%)';
    downBtn.style.background = 'linear-gradient(229.99deg, #22d241 -26%, #1c211d 145%)';
} else if (activesSlideIndex === 0) {
    upBtn.style.background = 'linear-gradient(220.16deg, #2d3446 -8%, #0a0a0c 138%)';
    downBtn.style.background = 'linear-gradient(220.16deg, #2d3446 -8%, #0a0a0c 138%)';
}
  const heigth = container.clientHeight;
  mainSlide.style.transform = `translateY(-${activesSlideIndex*heigth}px)` 
  sidebar.style.transform = `translateY(${activesSlideIndex*heigth}px)` 
}


function btnchange() {
for (const button of buttons) {
    button.addEventListener('click', () => {
        changeBtnColor()
    })
}
}

let id = setInterval(function() {
    changeSlide('up');  
}, 5000);