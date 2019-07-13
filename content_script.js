// Wrapper method to execute when debug mode is on
blockAdWithDebugging = () => {
  blockAd();
};

// Main method to remove ads
blockAd = () => {
  console.log('addon working..');
  // overlay remover
  let element = document.querySelector('#dMgwrKalfPXZ');
  if (element) {
    element.style.display='none';
  }
  element = document.querySelector('.pfkDCNjOxqYI-bg');
  if (element) {
    element.style.display='none';
  }
  // hides banner
  element = document.querySelector('.jw-logo-top-left');
  if (element) {
    element.style.display='none';
  }
  // skips ads
  element = document.querySelector('.jw-skip');
  if (element) {
    element.click();
  }
};

// Initialization
let storageItem = browser.storage.local.get();
storageItem.then((result) => {
  // Blocking ADS
  if (result.isDebugModeOn) {
    console.log('Initializing GoMoviesPlus addon.');
    blockAdWithDebugging();
    setInterval(blockAdWithDebugging, 2000);
  } else {
    blockAd();
    setInterval(blockAd, 2000);
  }
});