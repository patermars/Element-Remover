let hoveredElement = null;
let enabled = false;
let originalCursor = '';

function setCursor(cursorType) {
  document.body.style.cursor = cursorType;
}

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
    if (!enabled && hoveredElement) {
      removeHighlight(hoveredElement);
      hoveredElement = null;
    }
  }
});

chrome.storage.local.get('enabled', function(data) {
  enabled = data.enabled || false;
});