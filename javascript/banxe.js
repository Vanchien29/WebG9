
document.getElementById("scrollToTopButton").addEventListener("click", function() {
    scrollToTop(500); //
    });
    
    function scrollToTop(duration) {
    const scrollStep = -window.scrollY / (duration / 15);
    
    const scrollInterval = setInterval(function() {
        if (window.scrollY > 0) {
        window.scrollBy(0, scrollStep);
        } else {
        clearInterval(scrollInterval);
        }
    }, 15);
}

const iconButton = document.getElementById("fa-thaydoi");
    let isStarIcon = true;

    iconButton.addEventListener("click", function () {
        const icon = iconButton.querySelector("i");
        if (isStarIcon) {
        icon.className = "fa fa-angle-up "; // Biểu tượng mới khi ấn
        
        } else {
        icon.className = "fa fa-angle-down"; // Biểu tượng ban đầu khi ấn lại
        }
        isStarIcon = !isStarIcon; // Đảm bảo chuyển đổi giữa hai biểu tượng
    });
    

const iconButton1 = document.getElementById("fa-thaydoi1");
    let isStarIcon1 = true;

    iconButton1.addEventListener("click", function () {
      const icon = iconButton1.querySelector("i");
      if (isStarIcon1) {
        icon.className = "fa fa-angle-up "; // Biểu tượng mới khi ấn
        
      } else {
        icon.className = "fa fa-angle-down"; // Biểu tượng ban đầu khi ấn lại
      }
      isStarIcon1 = !isStarIcon1; // Đảm bảo chuyển đổi giữa hai biểu tượng
    });

const iconButton2 = document.getElementById("fa-thaydoi2");
    let isStarIcon2 = true;

    iconButton2.addEventListener("click", function () {
      const icon = iconButton2.querySelector("i");
      if (isStarIcon2) {
        icon.className = "fa fa-angle-up "; // Biểu tượng mới khi ấn
        
      } else {
        icon.className = "fa fa-angle-down"; // Biểu tượng ban đầu khi ấn lại
      }
      isStarIcon2 = !isStarIcon2; // Đảm bảo chuyển đổi giữa hai biểu tượng
    });

const iconButton3 = document.getElementById("fa-thaydoi3");
    let isStarIcon3 = true;

    iconButton3.addEventListener("click", function () {
      const icon = iconButton3.querySelector("i");
      if (isStarIcon3) {
        icon.className = "fa fa-angle-up "; // Biểu tượng mới khi ấn
        
      } else {
        icon.className = "fa fa-angle-down"; // Biểu tượng ban đầu khi ấn lại
      }
      isStarIcon3 = !isStarIcon3; // Đảm bảo chuyển đổi giữa hai biểu tượng
    });

const iconButton4 = document.getElementById("fa-thaydoi4");
    let isStarIcon4 = true;

    iconButton4.addEventListener("click", function () {
      const icon = iconButton4.querySelector("i");
      if (isStarIcon4) {
        icon.className = "fa fa-angle-up "; // Biểu tượng mới khi ấn
        
      } else {
        icon.className = "fa fa-angle-down"; // Biểu tượng ban đầu khi ấn lại
      }
      isStarIcon4 = !isStarIcon4; // Đảm bảo chuyển đổi giữa hai biểu tượng
    });

document.getElementById("scrollToTopButton1").addEventListener("click", function() {
    scrollToTop(600); //
    });
    
    function scrollToTop(duration) {
    const scrollStep = -window.scrollY / (duration / 15);
    
    const scrollInterval = setInterval(function() {
        if (window.scrollY > 0) {
        window.scrollBy(0, scrollStep);
        } else {
        clearInterval(scrollInterval);
        }
    }, 15);
}