function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
  }
  

  // Toggle Dropdown Menu for Toolbar
document.querySelectorAll(".dropdown-toggle").forEach((toggle) => {
  toggle.addEventListener("click", function () {
    const parent = this.parentElement;
    parent.classList.toggle("active");

    // Close other open menus
    document.querySelectorAll(".toolbar-item").forEach((item) => {
      if (item !== parent) {
        item.classList.remove("active");
      }
    });
  });
});






// Show the Pop-Up 3 Seconds After Page Load
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const popup = document.getElementById("popup");
    popup.classList.add("show");

    // Close Pop-Up When User Clicks Anywhere
    document.addEventListener("click", closePopup);
  }, 3000); // 3000ms = 3 seconds
});

// Close Pop-Up Function
function closePopup() {
  const popup = document.getElementById("popup");
  if (popup.classList.contains("show")) {
    popup.classList.remove("show");

    // Remove the event listener after closing
    document.removeEventListener("click", closePopup);
  }
}





// Scroll Animation Logic
document.addEventListener('DOMContentLoaded', () => {
  const animatedSections = document.querySelectorAll('[data-scroll]');

  const handleScroll = () => {
    animatedSections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight * 0.8;

      if (sectionTop < triggerPoint) {
        section.classList.add('scroll-animate');
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Trigger on page load in case sections are already in view
});

// Register the Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js")
    .then(() => console.log("✅ Service Worker Registered!"))
    .catch((error) => console.error("❌ Service Worker Registration Failed:", error));
}

