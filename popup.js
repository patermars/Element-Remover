let enabled = false;

document.getElementById('toggleButton').addEventListener('click', function() {
  enabled = !enabled;
  this.textContent = enabled ? 'Disable Deleter' : 'Enable Deleter';
  chrome.storage.local.set({enabled: enabled});
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: "toggle", enabled: enabled});
  });
});

chrome.storage.local.get('enabled', function(data) {
  enabled = data.enabled || false;
  document.getElementById('toggleButton').textContent = enabled ? 'Disable Deleter' : 'Enable Deleter';
});