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
  