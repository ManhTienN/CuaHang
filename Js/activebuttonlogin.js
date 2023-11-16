document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById("user__button");
    var myList = document.getElementById("user__section");
  
    toggleButton.addEventListener("click", function(e) {
        e.stopPropagation(); // Ngăn chặn sự kiện click từ việc lan ra ngoài myList
        myList.classList.toggle("hidden__login");
      });
    
      document.addEventListener("click", function(e) {
        var target = e.target;
        // Kiểm tra nếu phần tử được click không thuộc user__section, thì ẩn user__section
        if (!myList.contains(target) && target !== toggleButton) {
          myList.classList.add("hidden__login");
        }
      });
  });