document.addEventListener('DOMContentloaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.querySelector('.menu');
  
  menuToggle.addEventListener('change', function() {
    if (menuToggle.checked) {
        menu.style.display = 'flex';
    }
    else {
      menu.style.display = 'none';
    }
  });
});