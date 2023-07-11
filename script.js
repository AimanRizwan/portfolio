

$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Scroll up
    $('.scroll-up-btn').click(function(){
        $('html, body').animate({scrollTop: 0}, 'slow');
    });

  

    // Toggle navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });
    // typed animation
    var typed = new Typed(".typing", {
        strings:[" ", "Graduate", "Software", "Developer"],
        typeSpeed:100,
        backSpeed:60,
        loop: true

    });



    // Owl Carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

const button = document.querySelector("button[type='submit']");

// Add a click event listener to the button
button.addEventListener("click", function() {
  // Display a success message
  const successMessage = document.createElement("p");
  successMessage.textContent = "Successfully submitted!";
  
  // Append the success message to the button's parent container
  button.parentElement.appendChild(successMessage);
});
