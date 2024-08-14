document.getElementById("activate").addEventListener("click", () => {
    chrome.scripting.executeScript({
      target: { tabId: chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => tabs[0].id) },
      function: activateRemovalMode,
    });
  });
  
  document.getElementById("deactivate").addEventListener("click", () => {
    chrome.scripting.executeScript({
      target: { tabId: chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => tabs[0].id) },
      function: deactivateRemovalMode,
    });
  });
  
  function activateRemovalMode() {
    document.addEventListener("click", removeElement, true);
  }
  
  function deactivateRemovalMode() {
    document.removeEventListener("click", removeElement, true);
  }
  
  function removeElement(event) {
    event.stopPropagation();
    event.preventDefault();
    event.target.remove();
  }
  