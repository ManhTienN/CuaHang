// script.js
document.addEventListener("DOMContentLoaded", function() {
    var openPopupButton = document.getElementById("loginBtn");
    var closePopupButton = document.getElementById("closePopup");
    var loginPopup = document.getElementById("loginPopup");
  
    openPopupButton.addEventListener("click", function() {
        loginPopup.classList.toggle("active")
    });
  
    closePopupButton.addEventListener("click", function() {
      loginPopup.classList.remove("active")
    });
  
    window.addEventListener("click", function(e) {
      if (e.target === loginPopup) {
        loginPopup.classList.remove("active")
      }
    });
  });