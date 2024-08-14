let hoveredElement = null;
let enabled = false;
let originalCursor = '';

function highlightElement(element) {
  if (enabled) {
    element.style.outline = '2px solid red';
  }
}

function removeHighlight(element) {
  element.style.outline = '';
}

function deleteElement(element) {
  if (enabled) {
    element.remove();
  }
}

document.addEventListener('mouseover', function(event) {
  if (enabled) {
    if (hoveredElement) {
      removeHighlight(hoveredElement);
    }
    hoveredElement = event.target;
    highlightElement(hoveredElement);
  }
});

document.addEventListener('mouseout', function(event) {
  if (enabled && hoveredElement) {
    removeHighlight(hoveredElement);
    hoveredElement = null;
  }
});

document.addEventListener('click', function(event) {
  if (enabled && hoveredElement) {
    event.preventDefault();
    event.stopPropagation();
    deleteElement(hoveredElement);
    hoveredElement = null;
  }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "toggle") {
    enabled = request.enabled;
    if (enabled) {
          document.querySelectorAll('*').forEach(element => {
            element.style.cursor = 'url(https://i.postimg.cc/05zZv2kN/cursor.png) 10 10, auto';
      });
    } else {
      document.querySelectorAll('*').forEach(element => {
        element.style.cursor = 'default';
  });
    }
    if (!enabled && hoveredElement) {
      removeHighlight(hoveredElement);
      hoveredElement = null;
    }
  }
});

chrome.storage.local.get('enabled', function(data) {
  enabled = data.enabled || false;
  setCursor(enabled ? 'url(https://i.postimg.cc/05zZv2kN/cursor.png) 10 10, auto' : 'default');
});