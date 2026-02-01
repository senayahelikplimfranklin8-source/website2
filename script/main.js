const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const sideMenu = document.getElementById("sideMenu");

menuBtn.addEventListener("click", () => {
  sideMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sideMenu.classList.remove("active");
});









/*SECTION TWO OF INDEX*/
document.querySelector(".shop-btn").addEventListener("click", () => {
  // window.location.href = "/shop";
  console.log("Shop All clicked");
});




document.querySelector(".shop-alt-btn").addEventListener("click", () => {
  console.log("Shop button clicked");
});


/*footer*/
document.querySelectorAll(".footer-links a").forEach(link => {
  link.addEventListener("mouseenter", () => {
    link.style.letterSpacing = "1.2px";
  });

  link.addEventListener("mouseleave", () => {
    link.style.letterSpacing = "normal";
  });
});


/*search*/
// Open Search
const searchIcon = document.getElementById("searchIcon");
const searchOverlay = document.getElementById("searchOverlay");
const searchInput = document.getElementById("searchInput");
const closeSearch = document.getElementById("closeSearch");

searchIcon.addEventListener("click", () => {
  searchOverlay.style.display = "flex";
  searchInput.focus();
});

closeSearch.addEventListener("click", () => {
  searchOverlay.style.display = "none";
});

// Enter key triggers search
searchInput.addEventListener("keydown", (e) => {
  if(e.key === "Enter") {
    const query = searchInput.value.trim();
    if(query) {
      // Example: go to shop page with query as parameter
      window.location.href = `shop.html?search=${encodeURIComponent(query)}`;
    }
  }
});






document.getElementById("userIcon").onclick = () => {
    fetch("check_session.php")
      .then(res => res.text())
      .then(status => {
        if(status === "LOGGED_IN"){
          window.location.href = "dashboard.php";
        } else {
          window.location.href = "account.html";
        }
      });
  };
