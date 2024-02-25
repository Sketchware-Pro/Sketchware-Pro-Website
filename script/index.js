function openNav() {
    document.getElementsByClassName("nav-links[0]").style.width = "70%";
    document.getElementById("main").style.display = "block";
}
window.addEventListener('DOMContentLoaded', function() {
    const rocket = document.querySelector('.rocket'); // Use querySelector
  
    if (navigator.userAgent.indexOf('iPhone') > -1 || navigator.userAgent.indexOf('iPad') > -1) {
      rocket.style.display = 'none'; // Access style directly after selection
      document.querySelector('.fallback-image').style.display = 'block';
    } else {
      console.log('Not an iPhone or iPad');
    }
  });

 /* function reveal() {
    var reveals = document.querySelectorAll("#main2");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal(); */