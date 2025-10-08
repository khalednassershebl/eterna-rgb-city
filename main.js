//----------------------------------------------------------------
// Toggle Navbar
$(".header .nav-logo .nav-mobile-icon").on("click", function () {
  $(".big-nav").toggleClass("big-nav-hiddin");
  $(".close-overlay").addClass("open-over");
});
// $(".header .nav-logo .nav-search-icon").on("click", function () {
//   $(".big-nav").toggleClass("big-nav-hiddin");
//   $(".big-nav .big-nav-search .form-control").focus();
//   $(".close-overlay").addClass("open-over");
// });
$(".li-link .li-link-icon").on("click", function () {
  $(this)
    .parent()
    .parent()
    .find(".nav-link-popup")
    .removeClass("big-nav-hiddin");
});
//----------------------------------------------------------------

$(".big-nav .close-big-nav").on("click", function () {
  $(".big-nav").addClass("big-nav-hiddin");
  $(".close-overlay").removeClass("open-over");
});

$(".close-link-popup").on("click", function () {
  $(".nav-link-popup").addClass("big-nav-hiddin");
});

// All Popups
$(".close-overlay").on("click", function () {
  $(this).removeClass("open-over");
  $(".big-nav").addClass("big-nav-hiddin");
  $(".nav-link-popup").addClass("big-nav-hiddin");
  $(".order-service").removeClass("open-popup");
  $(".contact-container").removeClass("open-popup");
});





// Toggle Language
if ($("html").attr("lang") == "en") {
  $(".page-lang").text("العربية");
} else {
  $(".page-lang").text("English");
}

// Video Autoplay
$(document).ready(function() {
  const video = document.querySelector('.index-header video');
  if (video) {
    // Ensure video plays when page loads
    video.play().catch(function(error) {
      console.log('Video autoplay failed:', error);
      // If autoplay fails, try to play on user interaction
      document.addEventListener('click', function() {
        video.play().catch(function(err) {
          console.log('Video play failed:', err);
        });
      }, { once: true });
    });
    
    // Ensure video is muted for autoplay
    video.muted = true;
    
    // Handle video loading
    video.addEventListener('loadeddata', function() {
      console.log('Video loaded successfully');
    });
    
    video.addEventListener('error', function(e) {
      console.log('Video error:', e);
    });
  }
});

// WhatsApp Popup Functionality
$(document).ready(function() {
  const whatsappFloat = document.getElementById('whatsappFloat');
  const whatsappPopup = document.getElementById('whatsappPopup');
  const whatsappClose = document.getElementById('whatsappClose');
  
  // Show popup after 3 seconds
  setTimeout(function() {
    if (whatsappPopup && !localStorage.getItem('whatsappPopupClosed')) {
      whatsappPopup.classList.add('show');
    }
  }, 3000);
  
  // Toggle popup on float button click
  if (whatsappFloat) {
    whatsappFloat.addEventListener('click', function() {
      if (whatsappPopup) {
        whatsappPopup.classList.toggle('show');
      }
    });
  }
  
  // Close popup on close button click
  if (whatsappClose) {
    whatsappClose.addEventListener('click', function() {
      if (whatsappPopup) {
        whatsappPopup.classList.remove('show');
        localStorage.setItem('whatsappPopupClosed', 'true');
      }
    });
  }
  
  // Close popup when clicking outside
  document.addEventListener('click', function(event) {
    if (whatsappPopup && whatsappFloat) {
      const isClickInsidePopup = whatsappPopup.contains(event.target);
      const isClickOnFloat = whatsappFloat.contains(event.target);
      
      if (!isClickInsidePopup && !isClickOnFloat && whatsappPopup.classList.contains('show')) {
        whatsappPopup.classList.remove('show');
      }
    }
  });
  
  // Auto-hide popup after 10 seconds if not interacted with
  let popupTimer;
  if (whatsappPopup) {
    whatsappPopup.addEventListener('mouseenter', function() {
      clearTimeout(popupTimer);
    });
    
    whatsappPopup.addEventListener('mouseleave', function() {
      popupTimer = setTimeout(function() {
        whatsappPopup.classList.remove('show');
      }, 10000);
    });
  }
});


// Initialize WOW.js for scroll animations
new WOW().init();


// Tilt.js
$(document).ready(function() {
  $('.service-card-tilt, .project-card-tilt, .blog-card-tilt, .tes-card-tilt, .review-card-tilt, .num-card-tilt, .feat-card-tilt').tilt({
    maxTilt: 7,
    perspective: 300,
    glare: true,
    maxGlare: .1
  });
});

// $(".tilt-effect").tilt({
//   scale: 1,
//   maxTilt: 7,
// });

// CountTo Animation for Testimonials Section
$(document).ready(function() {
  let countToTriggered = false;
  
  function triggerCountTo() {
    if (!countToTriggered) {
      $('.count-to').each(function() {
        const $this = $(this);
        const to = parseInt($this.data('to'));
        const from = parseInt($this.data('from')) || 0;
        const speed = parseInt($this.data('speed')) || 2000;
        const suffix = $this.data('suffix') || '';
        
        $this.countTo({
          from: from,
          to: to,
          speed: speed,
          refreshInterval: 50,
          formatter: function (value, options) {
            return Math.floor(value).toLocaleString() + suffix;
          },
          onUpdate: function(value) {
            // Optional: Add any custom logic during animation
          },
          onComplete: function(value) {
            // Optional: Add any custom logic when animation completes
          }
        });
      });
      countToTriggered = true;
    }
  }
  
  // Check if testimonials section is in view
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Trigger animation when testimonials section comes into view
  $(window).on('scroll', function() {
    const testimonialsSection = document.querySelector('.num-cards');
    if (testimonialsSection && isInViewport(testimonialsSection)) {
      triggerCountTo();
    }
  });
  
  // Also trigger on page load if section is already visible
  $(window).on('load', function() {
    const testimonialsSection = document.querySelector('.num-cards');
    if (testimonialsSection && isInViewport(testimonialsSection)) {
      triggerCountTo();
    }
  });
});