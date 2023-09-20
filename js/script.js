// Close navbar 
document.addEventListener("click", function (event) {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");
  
    if (!navbarToggler.contains(event.target) && !navbarCollapse.contains(event.target)) {
      navbarCollapse.classList.remove("show");
    }
  });
  
  $(document).ready(function() {
    // Web project click event
    $('.web-project-item').on('click', function() {
      var projectName = $(this).text().trim();
  
      // Remove active class from all web project items
      $('.web-project-item').removeClass('active');
  
      // Add active class to the clicked web project item
      $(this).addClass('active');
  
      // Hide all web project contents
      $('.web-project-content').hide();
  
      // Show the selected web project content based on the project name
      if (projectName === 'Shopify Project') {
        $('#carouselContainer').show();
        $('#workforceCarousel').hide();
      } else if (projectName === 'Workforce Warriors') {
        $('#carouselContainer').hide();
        $('#workforceCarousel').show();
      }
    });
  
    // UX project click event
    $('.ux-project-item').on('click', function() {
      var projectName = $(this).text().trim();
  
      $('.ux-project-item').removeClass('active');
  
      $(this).addClass('active');
  
      $('.ux-project-content').hide();
  
      if (projectName === 'Personal Brand') {
        $('#uxCarouselProject1').show();
        $('#uxCarouselProject2').hide();
        $('#uxCarouselProject3').hide();
        $('#uxCarouselProject4').hide(); 
      } else if (projectName === 'Dreamland Cafe') {
        $('#uxCarouselProject1').hide();
        $('#uxCarouselProject2').show();
        $('#uxCarouselProject3').hide();
        $('#uxCarouselProject4').hide();
      } else if (projectName === 'Crafty-Pie Bakery') {
        $('#uxCarouselProject1').hide();
        $('#uxCarouselProject2').hide();
        $('#uxCarouselProject3').show();
        $('#uxCarouselProject4').hide();
      } else if (projectName === 'Southwest Airline') {
        $('#uxCarouselProject1').hide();
        $('#uxCarouselProject2').hide();
        $('#uxCarouselProject3').hide();
        $('#uxCarouselProject4').show();
      }
    });
    // illustration project click event
    $('.i-project-item').on('click', function() {
      var projectName = $(this).text().trim();
  
      $('.i-project-item').removeClass('active');
  
      $(this).addClass('active');
  
      $('.i-project-content').hide();
  
      if (projectName === 'Logo Designs') {
        $('#iCarouselProject1').show();
        $('#iCarouselProject2').hide();
        $('#iCarouselProject3').hide();
      } else if (projectName === 'Avatar') {
        $('#iCarouselProject1').hide();
        $('#iCarouselProject2').show();
        $('#iCarouselProject3').hide();
      } else if (projectName === 'Branding Poster') {
        $('#iCarouselProject1').hide();
        $('#iCarouselProject2').hide();
        $('#iCarouselProject3').show();
      }
    });
  });
  
// Youtube


// cursor custom

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 20)+"px; left: "+(e.pageX - 20)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})


// type effect
document.addEventListener("DOMContentLoaded", function () {
  if (window.location.href.includes("index.html")) {
    setTimeout(function () {
      var inputElement = document.querySelector(".input");
      if (inputElement) {
        var typed = new Typed(inputElement, {
          strings: ["Ux Designer", "UI Designer", "Frontend Developer"],
          typeSpeed: 80,
          backSpeed: 85,
          loop: true,
        });
      }
    }, 1000); 
  }
});