// Smooth scrolling when clicking on links with hash tags
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50, // Adjust as needed
          behavior: 'smooth'
        });
      }
    });
  });
  const menuBar = document.querySelector('.fa-bars');
        const menuItems = document.querySelector('ul');

        menuBar.addEventListener('click', () => {
            menuItems.classList.toggle('hidden');
        });
        document.addEventListener('DOMContentLoaded', function () {
          const textElement = document.getElementById('text');
          const text = "Hello! I'm [Your Name]. Welcome to my portfolio.";
      
          function typeWriter(text, i, callback) {
              if (i < text.length) {
                  textElement.innerHTML += text.charAt(i);
                  i++;
                  setTimeout(function () {
                      typeWriter(text, i, callback);
                  }, 50); // Adjust the typing speed (milliseconds)
              } else if (typeof callback === 'function') {
                  setTimeout(callback, 1000); // Adjust the pause before the cursor blinks again
              }
          }
      
          typeWriter(text, 0);
      });
      