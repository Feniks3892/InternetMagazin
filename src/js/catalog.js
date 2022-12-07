// ---catalog--------
const swiper = new Swiper('.catalog-swiper-container', {
  allowTouchMove: false,
  loop: true,
  slidesPerGroup: 1,
  slidesPerView: 1,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
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

  /************************price-pull************************/
const rangeSlider = document.getElementById('range-slider');

if (rangeSlider) {
	noUiSlider.create(rangeSlider, {
    start: [2000, 150000],
		connect: true,
		step: 1,
    range: {
			'min': [-17000],
			'max': [230000]
    }
	});

	const input0 = document.getElementById('input-0');
	const input1 = document.getElementById('input-1');
	const inputs = [input0, input1];

	rangeSlider.noUiSlider.on('update', function(values, handle){
		inputs[handle].value = Math.round(values[handle]);
	});

	const setRangeSlider = (i, value) => {
		let arr = [null, null];
		arr[i] = value;

		console.log(arr);

		rangeSlider.noUiSlider.set(arr);
	};

	inputs.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			console.log(index);
			setRangeSlider(index, e.currentTarget.value);
		});
	});
}

/************************select-with-check************************/
/*---category---*/
let openCategory = document.querySelector('.open-category');
let closeCategory = document.querySelector('.close-category');
let menuCategory  = document.querySelector('.checkboxes-category');

openCategory.onclick = function(){
  openCategory.classList.add('active');
  menuCategory.classList.add('active');
  closeCategory.classList.add('active');
}
closeCategory.onclick = function(){
  openCategory.classList.remove('active');
  menuCategory.classList.remove('active');
  closeCategory.classList.remove('active');
}

/*---price---*/

let openPrice = document.querySelector('.open-price');
let closePrice = document.querySelector('.close-price');
let menuPrice  = document.querySelector('.checkboxes-price');

openPrice.onclick = function(){
  openPrice.classList.add('active');
  menuPrice.classList.add('active');
  closePrice.classList.add('active');
}
closePrice.onclick = function(){
  openPrice.classList.remove('active');
  menuPrice.classList.remove('active');
  closePrice.classList.remove('active');
}

/*---discount---*/

let openDiscount = document.querySelector('.open-discount');
let closeDiscount = document.querySelector('.close-discount');
let menuDiscount  = document.querySelector('.checkboxes-discount');

openDiscount.onclick = function(){
  openDiscount.classList.add('active');
  menuDiscount.classList.add('active');
  closeDiscount.classList.add('active');
}
closeDiscount.onclick = function(){
  openDiscount.classList.remove('active');
  menuDiscount.classList.remove('active');
  closeDiscount.classList.remove('active');
}

/*---color---*/

let openColor = document.querySelector('.open-color');
let closeColor = document.querySelector('.close-color');
let menuColor  = document.querySelector('.checkboxes-color');

openColor.onclick = function(){
  openColor.classList.add('active');
  menuColor.classList.add('active');
  closeColor.classList.add('active');
}
closeColor.onclick = function(){
  openColor.classList.remove('active');
  menuColor.classList.remove('active');
  closeColor.classList.remove('active');
}
