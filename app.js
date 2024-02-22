document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery-image');
    const overlay = document.querySelector('.overlay');
    const expandedImage = overlay.querySelector('.expanded-image');
    const closeButton = document.querySelector('.close-button');
    const navLinks = document.querySelector('.nav-links');
  
    function enlargeImage(event) {
      const clickedImage = event.target;
      expandedImage.src = clickedImage.src;
      expandedImage.alt = clickedImage.alt;
      overlay.classList.add('active');
    }
  
    function closeOverlay() {
      overlay.classList.remove('active');
      navLinks.classList.remove('open'); // Close the navigation menu
    }
  
    galleryImages.forEach(image => {
      image.addEventListener('click', enlargeImage);
      image.addEventListener('mouseenter', () => image.classList.add('hover-shadow'));
      image.addEventListener('mouseleave', () => image.classList.remove('hover-shadow'));
    });
  
    closeButton.addEventListener('click', closeOverlay);
  
    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) {
        closeOverlay();
      }
    });
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const closeButton = document.querySelector('.close-button');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        closeButton.classList.toggle('active');
    });

    closeButton.addEventListener('click', () => {
        navLinks.classList.remove('open');
        closeButton.classList.remove('active');
    });
});


const imageFooterContainer = document.querySelector('.image-footer .container');


  

imageSources.forEach(src => {
  const image = document.createElement('img');
  image.src = src; 
  imageFooterContainer.appendChild(image);
});



document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const closeButton = document.querySelector('.close-button');
  
    function toggleMenu() {
      navLinks.classList.toggle('open');
      closeButton.classList.toggle('active'); // Assuming some visible change
    }
  
    menuToggle.addEventListener('click', toggleMenu);
    closeButton.addEventListener('click', toggleMenu);
  
    // Event listener for navigation links
    navLinks.addEventListener('click', (event) => { 
      if (event.target.tagName === 'A') { // Ensure the click was on a link
        function toggleMenu() {
            navLinks.classList.toggle('open');
            closeButton.classList.toggle('active');
          
            // If the menu is closing, remove focus from the link
            if (!navLinks.classList.contains('open')) { 
              document.activeElement.blur(); 
            }
          }
          
      }
    });
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
  
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  
    // Update links with the correct filenames
    const links = navLinks.querySelectorAll('a');
    links[0].href = "index.html";     // Home link
    links[1].href = "about.html";     // About link
    links[2].href = "headshots.html"; // Headshots link
    links[3].href = "weddings.html";  // Weddings link
    links[4].href = "saturn-tv.html"; // Saturn TV link
  });
  