let verticalBar = document.getElementById('vertical_underline');
let verticalMenus = document.querySelectorAll('section a');

verticalMenus.forEach((menu) =>
  menu.addEventListener('click', (e) => verticalIndicator(e.currentTarget))
);

function verticalIndicator(e) {
  verticalBar.style.left = e.offsetLeft + 'px';
  verticalBar.style.width = e.offsetWidth + 'px';
  verticalBar.style.top = e.offsetTop + e.offsetHeight + 'px';
}
