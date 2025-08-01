fetch('images/logo-bookmark.svg')
.then(response => response.text())
.then(svg => {
  document.getElementById('logo-white').innerHTML = svg;
  document.getElementById('logo-footer').innerHTML = svg;
  document.getElementById('logo-footer').children[0].children[0].children[0].setAttribute('fill', '#fff');
});

fetch('images/icon-arrow.svg')
.then(response => response.text())
.then(svg => {
  const arrows = document.querySelectorAll('.arrow');
  arrows.forEach(arrow => {
    arrow.innerHTML = svg;
  });
});

fetch('images/icon-facebook.svg')
.then(response => response.text())
.then(svg => {
  document.getElementById('logo-facebook').innerHTML = svg;
  const facebookLogo = document.getElementById('logo-facebook');
  facebookLogo.addEventListener('mouseover', () => {
    facebookLogo.children[0].children[0].setAttribute('fill', 'hsl(0, 94%, 66%)')
  })

  facebookLogo.addEventListener('mouseout', () => {
    facebookLogo.children[0].children[0].setAttribute('fill', '#fff')
  })
});

fetch('images/icon-twitter.svg')
.then(response => response.text())
.then(svg => {
  document.getElementById('logo-twitter').innerHTML = svg;
  const twitterLogo = document.getElementById('logo-twitter');
  twitterLogo.addEventListener('mouseover', () => {
    twitterLogo.children[0].children[0].setAttribute('fill', 'hsl(0, 94%, 66%)')
  })

  twitterLogo.addEventListener('mouseout', () => {
    twitterLogo.children[0].children[0].setAttribute('fill', '#fff')
  })
});


const mobileLogo = document.getElementById('logo-white');
const mainLogo = document.getElementById('logo');
const mobileMenu = document.querySelector('.mobile-menu');
const burger = document.querySelector('.burger');
const noScroll = document.getElementsByTagName('body');

function toggleMenu() {
  mobileMenu.classList.toggle('hide-mobile-menu');
  burger.classList.toggle('hide-burger');
  mainLogo.classList.toggle('hide-logo');
  noScroll[0].classList.toggle('no-scroll')

  mobileLogo.children[0].children[0].children[0].setAttribute('fill', 'white');
  mobileLogo.children[0].children[0].children[1].children[0].setAttribute('fill', 'white');
  mobileLogo.children[0].children[0].children[1].children[1].setAttribute('fill', '#242A45');
}

const tabs = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.feature-tab');
const underline = document.querySelector('.underline');

tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => {

    
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));
    tabs.forEach(t => t.classList.remove('tab-btn-choosen'));
    
    const screenWorker = window.matchMedia('(max-width: 1400px)');
    if (screenWorker.matches) {
      tabs[i].classList.add('tab-btn-choosen')
    }

    panels[i].classList.add('active');
    
    const offset = tab.offsetLeft;
    const width = tab.offsetWidth;
    underline.style.transform = `translateX(${offset}px)`;
    underline.style.width = `${width}px`;
  });
});

const questionBtn = document.querySelectorAll('.q-btn');
const answer = document.querySelectorAll('.answer');
const arrows = document.querySelectorAll('.arrow');

questionBtn.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    answer[i].classList.toggle('active-answer');

    arrows[i].classList.toggle('rotate-arrow');

    if(arrows[i].children[0].children[0].contains('stroke="#5267DF"')){
      arrows[i].children[0].children[0].contains('stroke="#hsl(0, 94%, 66%)"')
    }
  })
});

const email = document.getElementById('email')
const errorMessage = document.querySelector('.error-p');
const errorIcon = document.querySelector('.error')


function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function sendEmail(){
  if(!isValidEmail(email.value)){
    email.classList.add('active-error-border');
    errorMessage.classList.add('active-error');
    errorIcon.classList.add('active-error');
  } 
  else{
    email.classList.remove('active-error-border');
    errorMessage.classList.remove('active-error');
    errorIcon.classList.remove('active-error');
  }
}