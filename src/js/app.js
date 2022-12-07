/*************************SWIPER*************************/
// ---hero-section---
const swiper = new Swiper('.hero__swiper-container', {
  allowTouchMove: true,
  loop: true,
  autoplay: {
    delay: 10000
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
// ---offer---
let offersSlider = new Swiper(".offers__slides-container", {
  slidesPerView: 'auto',
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 32,
  pagination: {
    el: ".offers .swiper-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".offers .next",
    prevEl: ".offers .prev"
  },

  breakpoints: {
    320: {
      slidesPerGroup: 1,
      slidesPerView: 1,
      spaceBetween: 30
    },

    767: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 30
    },

    1023: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 30
    },

    1440: {
      slidesPerGroup: 3,
      slidesPerView: 'auto',
      spaceBetween: 32
    }
  },

  a11y: false
});

// ---useful---
let usefulSlider = new Swiper(".useful__slides-container", {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 32,
  pagination: {
    el: ".useful .swiper-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".useful .next",
    prevEl: ".useful .prev"
  },

  breakpoints: {
    320: {
      slidesPerGroup: 1,
      slidesPerView: 1,
      spaceBetween: 10
    },

    767: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 30
    },

    1023: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 30
    },

    1440: {
      slidesPerGroup: 2,
      slidesPerView: 2,
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

/*************************TOOLTIP*************************/
tippy('#contact-tooltip', {
  content: "Реплицированные с зарубежных источников, исследования формируют глобальную сеть.",
  delay: 300,
});

/************************show-more************************/
const showMore = document.querySelector('.show-more');
const productsLength = document.querySelectorAll('.products-grid__item').length;
let items = 8;

showMore.addEventListener('click', () => {
	items += 4;
	const array = Array.from(document.querySelector('.products-grid').children);
	const visItems = array.slice(0, items);

	visItems.forEach(el => el.classList.add('is-visible'));

	if (visItems.length === productsLength) {
		showMore.style.display = 'none';
	}
});
