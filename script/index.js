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