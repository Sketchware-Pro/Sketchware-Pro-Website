function openNav() {
    document.getElementsByClassName("nav-links[0]").style.width = "70%";
    document.getElementById("main").style.display = "block";
}
if (navigator.userAgent.indexOf('iPhone') > -1 || navigator.userAgent.indexOf('iPad') > -1) {
    document.getElementsByClassName('rocket[0]').style.display = 'none';
    document.querySelector('.fallback-image').style.display = 'block';
  }