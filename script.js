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




let deferredPrompt;

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault(); // Prevent default prompt
  deferredPrompt = event;

  // Show the "Install App" button inside the pop-up
  let installBtn = document.getElementById("install-btn");
  installBtn.style.display = "block"; // Show button

  installBtn.addEventListener("click", () => {
    deferredPrompt.prompt(); // Show install prompt

    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("✅ User installed the app");
      } else {
        console.log("❌ User dismissed the install prompt");
      }
      installBtn.style.display = "none"; // Hide button after interaction
    });
  });
});



if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js")
      .then((registration) => {
        console.log("✅ Service Worker Registered!", registration);
      })
      .catch((error) => {
        console.error("❌ Service Worker Registration Failed:", error);
      });
  });
}

