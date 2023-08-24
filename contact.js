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