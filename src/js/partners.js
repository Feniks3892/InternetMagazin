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