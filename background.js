// BetterBoxer Adblocker Skeleton
// This script provides the core logic for whitelist overrides to network requests,
// designed to work alongside system-wide RethinkDNS DoH adblocking.

let whitelist = new Set();

// Load whitelist from browser storage
browser.storage.local.get('whitelist').then(data => {
  if (data.whitelist && Array.isArray(data.whitelist)) {
    whitelist = new Set(data.whitelist);
  }
});

// Helper function to save whitelist to storage
function saveWhitelist() {
  browser.storage.local.set({ whitelist: Array.from(whitelist) });
}

// Intercept all requests
browser.webRequest.onBeforeRequest.addListener(
  function(details) {
    let urlObj = new URL(details.url);
    let domain = urlObj.hostname;
    // Whitelist override: allow requests to whitelisted domains
    if (whitelist.has(domain)) {
      return { cancel: false };
    }
    // Adblocking is handled upstream by RethinkDNS DoH
    // Optionally, add local block logic here if needed
    return { cancel: false };
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);

// Placeholder for UI code to add/remove domains to whitelist
// To be implemented in popup.js/options.js and UI HTML