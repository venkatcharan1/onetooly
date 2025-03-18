self.addEventListener("install", (event) => {
    console.log("Service Worker Installed");
    self.skipWaiting();
  });
  
  self.addEventListener("fetch", (event) => {
    // You can add caching logic here if needed
  });
  