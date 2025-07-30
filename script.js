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
