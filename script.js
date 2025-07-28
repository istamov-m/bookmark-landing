fetch('images/logo-bookmark.svg')
.then(response => response.text())
.then(svg => {
  document.getElementById('logo-white').innerHTML = svg;
})

const mobileLogo = document.getElementById('logo-white');
const mainLogo = document.getElementById('logo');
const mobileMenu = document.querySelector('.mobile-menu');
const burger = document.querySelector('.burger');

function toggleMenu() {
  mobileMenu.classList.toggle('hide-mobile-menu');
  burger.classList.toggle('hide-burger');
  mainLogo.classList.toggle('hide-logo');

  mobileLogo.children[0].children[0].children[0].setAttribute('fill', 'white');
  mobileLogo.children[0].children[0].children[1].children[0].setAttribute('fill', 'white');
  mobileLogo.children[0].children[0].children[1].children[1].setAttribute('fill', '#242A45');
}

// window.matchMedia('(max-width: 1400px)').addEventListener('change', e => {
//     isPhone = e.matches;
//     if (isPhone) {
//         logo.children[0].children[0].children[0].setAttribute('fill', 'white');
//     } else{
//         logo.children[0].children[0].children[0].setAttribute('fill', '#242A45');
//     }
// })
