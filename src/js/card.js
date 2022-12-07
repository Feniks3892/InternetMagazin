// ---card---
let cardSlider = new Swiper(".card-slides-container", {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 32,
  pagination: {
    el: ".card-swcard-swiper .swiper-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".card-swiper .next",
    prevEl: ".card-swiper .prev"
  },

  breakpoints: {
    320: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 16
    },

    767: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 32
    },

    1023: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 32
    },

    1380: {
      slidesPerGroup: 4,
      slidesPerView: 4,
      spaceBetween: 32
    }
  },

  a11y: false
});
// ---mini-card---
let minicardSlider = new Swiper(".mini-card-slides-container", {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 32,
  pagination: {
    el: ".modal-content3 .swiper-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".modal-content3 .next",
    prevEl: ".modal-content3 .prev"
  },

  breakpoints: {
    320: {
      slidesPerGroup: 1,
      slidesPerView: 1,
      spaceBetween: 0
    },

    767: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 32
    },

    1023: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 32
    },

    1380: {
      slidesPerGroup: 4,
      slidesPerView: 4,
      spaceBetween: 32
    }
  },

  a11y: false
});
//**********************burger menu**********************
let burgerLine = document.querySelector('.burger__line');
let closeMenu = document.querySelector('.menu-close');
let navMenu  = document.querySelector('.nav__list');

burgerLine.onclick = function(){
  burgerLine.classList.add('active');
  navMenu.classList.add('active');
  closeMenu.classList.add('active');
}
closeMenu.onclick = function(){
  burgerLine.classList.remove('active');
  navMenu.classList.remove('active');
  closeMenu.classList.remove('active');
}
  /*************************SELECTOR*************************/
  const defaultSelect = () => {
    const element = document.querySelector('.default');
    const choices = new Choices(element, {
        searchEnabled: false,
        itemSelectText: ''
    });
  
  };
  
  defaultSelect();

  const citySelect = () => {
    const element = document.querySelector('.city');
    const choices = new Choices(element, {
        searchEnabled: false,
        itemSelectText: ''
    });
  
  };
  
  citySelect();
 

  /*************************MODAL*WINDOWS*********************/
const modal = document.getElementById('my-modal');
const modal2 = document.getElementById('my-modal2');
const modal3 = document.getElementById('my-modal3');
const btnOpen = document.getElementById("my-btn");
const bigger = document.getElementById('bigger');
const btnClose = document.getElementsByClassName("close")[0];
const btnNext = document.getElementById("next-btn");

btnOpen.onclick = function () {
  modal.style.display ="block";
}

btnNext.onclick = function () {
  modal2.style.display ="block";
  modal.style.display ="none";
}

btnClose.onclick = function () {
  modal.style.display ="none";
  modal2.style.display ="none";
  modal3.style.display ="none";
}

bigger.onclick = function () {
  modal3.style.display ="block";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display ="none";
  }
  if (event.target == modal2) {
    modal2.style.display ="none";
  }
  if (event.target == modal3) {
    modal3.style.display ="none";
  }
}