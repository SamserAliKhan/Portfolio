// Smooth scrolling when clicking on links with hash tags
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
          window.scrollTo({
              top: targetElement.offsetTop - 50,
              behavior: 'smooth'
          });
      }
  });
});

// Check if the elements exist before adding event listeners
const menuBar = document.querySelector('#sideNav'); // Assuming 'sideNav' is an ID
const menuItems = document.querySelector('ul');

if (menuBar) {
  menuBar.addEventListener('click', () => {
      if (menuItems) {
          menuItems.classList.toggle('hidden');
      }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const textElement = document.getElementById('text');
  const text = "Hello! I'm Samser Ali Khan. Welcome to my portfolio!";
  textElement.style.fontSize = '24px';
  function typeWriter(text, i, callback) {
      if (i < text.length) {
          textElement.innerHTML += text.charAt(i);
          i++;
          setTimeout(function () {
              typeWriter(text, i, callback);
          }, 50);
      } else if (typeof callback === 'function') {
          setTimeout(callback, 1000);
      }
  }

  typeWriter(text, 0);
});
