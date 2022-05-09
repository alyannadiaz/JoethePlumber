$(document).ready(function() {
      $('.toggleNav').click(function() {
        $('#flex-nav ul').toggleClass('open');
      });
    });
    
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("flex-nav").style.top = "0";
  } else {
    document.getElementById("flex-nav").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}