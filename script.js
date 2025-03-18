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


//manifest json
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (event) => {
    // Prevent the default install banner
    event.preventDefault();
    deferredPrompt = event;

    // Show install suggestion after 3 seconds
    setTimeout(() => {
        showInstallBanner();
    }, 3000);
});

function showInstallBanner() {
    if (!deferredPrompt) return;

    // Custom popup
    let installBanner = document.createElement("div");
    installBanner.innerHTML = `
        <div style="position:fixed; bottom:10px; left:10px; right:10px; background:#fff; padding:15px; 
        box-shadow:0px 4px 10px rgba(0,0,0,0.2); border-radius:10px; text-align:center; z-index:1000;">
            <p style="margin:0;">Install OneTooly for a better experience!</p>
            <button id="installBtn" style="background:#007bff; color:white; border:none; padding:10px 15px; 
            margin-top:10px; cursor:pointer; border-radius:5px;">Install Now</button>
        </div>
    `;

    document.body.appendChild(installBanner);

    // Handle install button click
    document.getElementById("installBtn").addEventListener("click", () => {
        installBanner.remove();
        deferredPrompt.prompt();

        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === "accepted") {
                console.log("User accepted install prompt");
            } else {
                console.log("User dismissed install prompt");
            }
            deferredPrompt = null;
        });
    });
}



//pwa installation
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js")
    .then(() => console.log("✅ Service Worker Registered!"))
    .catch((error) => console.error("❌ Service Worker Registration Failed:", error));
}

