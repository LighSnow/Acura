window.addEventListener('DOMContentLoaded', () => {
  //Custom Select
  const multiSelect = () => {
    const select = document.querySelectorAll('.select');

    select.forEach(el => {
      const element = document.querySelector('.js-choice');
      const choices = new Choices(el, {
        searchEnabled: false,
        placeholder: true,
        placeholderValue: null,
        searchPlaceholderValue: null,
      });
    });

  };

  multiSelect();

  //Fixed Header
  const fixedHeader = () => {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
      let scrollTop = window.scrollY;
      scrollTop >= 1 ? header.classList.add('fixed') : header.classList.remove('fixed');
    });
  };

  fixedHeader();

  //Show Burger Menu
  const showBurgerMenu = () => {
    const burgerBtn = document.querySelector('.burger');
    const burgerMenu = document.querySelector('.burger-menu');
    // const burgerClose = document.querySelector('.btn-close');
    const body = document.querySelector('body');
    const toggleBurgerMenu = () => {
      burgerBtn.classList.toggle('active');
      burgerMenu.classList.toggle('active');
      body.classList.toggle('lock');
    }

    burgerBtn.addEventListener('click', () => {
      toggleBurgerMenu();
    });
  };

  showBurgerMenu();



  //Slider
  const customersSlider = () => {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  };

  customersSlider();


  //Timer
  const timer = () => {
    const closingSoon = new Date('Mar 13 2021 00:00:00');

    const daysVal = document.querySelectorAll('.time-count__days .time-count__val');
    const hoursVal = document.querySelectorAll('.time-count__hours .time-count__val');
    const minutesVal = document.querySelectorAll('.time-count__minutes .time-count__val');
    const secondsVal = document.querySelectorAll('.time-count__seconds .time-count__val');



    const timeCount = () => {
      let now = new Date();
      let leftUntil = closingSoon - now;

      let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
      let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
      let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
      let seconds = Math.floor(leftUntil / 1000) % 60;

      daysVal.forEach(el => {
        el.textContent = days;
      });

      hoursVal.forEach(el => {
        hours < 10 ? el.textContent = `0${hours}` : el.textContent = hours;
      });

      minutesVal.forEach(el => {
        minutes < 10 ? el.textContent = `0${minutes}` : el.textContent = minutes;
      });

      secondsVal.forEach(el => {
        seconds < 10 ? el.textContent = `0${seconds}` : el.textContent = seconds;
      });


    };

    timeCount();
    setInterval(timeCount, 1000);
  };

  timer();

});