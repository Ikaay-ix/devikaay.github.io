const togggleButton = document.querySelector("#toggglebutton");
const navBarLinks = document.querySelector(".navlinks");
const authLinks = document.querySelector(".authlinks");
const allNavLink = document.querySelectorAll(".navlinks li");

togggleButton.addEventListener("click", () => {
    navBarLinks.classList.toggle("open")
    togggleButton.classList.toggle("open");
    authLinks.classList.toggle("open");
});

allNavLink.forEach(link => {
    link.addEventListener("click", () => {
    navBarLinks.classList.remove("open");
    togggleButton.classList.remove("open");
    authLinks.classList.remove("open");
    });
});



function countUp(target, end, duration) {
    const element = document.getElementById(target);
    const range = end;
    const increment = Math.ceil(range / (duration / 16)); // 16ms is close to 1 frame in 60fps
    let current = 0;

    function updateNumber() {
        current += increment;
        if (current >= range) {
            current = range;
            clearInterval(timer);
        }
        element.innerText = current + "+"; // Add the "+" sign after the current value
    }

    const timer = setInterval(updateNumber, 16); // Call the updateNumber function approximately every 16ms
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    const countSections = document.querySelectorAll("[id^='countSection']");
    countSections.forEach((countSection) => {
        if (isElementInViewport(countSection)) {
            const countNumber = countSection.querySelector("p");
            const targetNumber = parseInt(countNumber.getAttribute("data-count"), 10);
            if (!countNumber.classList.contains("counted")) {
                countNumber.classList.add("counted"); // Add a class to avoid recounting on subsequent scrolls
                countUp(countNumber.id, targetNumber, 2000); // Change the second argument to adjust the duration of the count animation (in milliseconds)
            }
        }
    });
}

window.addEventListener("scroll", handleScroll);


const splide = new Splide('.splide', {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    perPage: 1,
    autoScroll: {
        speed: 2,
    },
    arrows: true, // Enable navigation arrows
    pagination: false, // Disable pagination
    });
    
    splide.mount();

    // carousel ends here 


    document.addEventListener('DOMContentLoaded', function() {
        const backToTopButton = document.querySelector('.backtotop');
      
        window.addEventListener('scroll', function() {
          if (window.pageYOffset > 100) {
            backToTopButton.classList.add('show');
          } else {
            backToTopButton.classList.remove('show');
          }
        });
      
        backToTopButton.addEventListener('click', function(event) {
          event.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          const offsetTop = target.offsetTop;
      
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        });
      });



    
      document.addEventListener('DOMContentLoaded', function() {
        const scrollLinks = document.querySelectorAll('.scroll-link');
      
        for (let i = 0; i < scrollLinks.length; i++) {
          scrollLinks[i].addEventListener('click', function(event) {
            event.preventDefault();
      
            const target = document.querySelector(this.getAttribute('href'));
            const offsetTop = target.offsetTop;
      
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          });
        }
      });