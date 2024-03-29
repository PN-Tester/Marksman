// Function to inject content script and send parsePage event
async function injectContentScriptAndParsePage(tabId) {
  try {
    // Inject content script
    await chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ['content.js']
    });

    // Send message to content script to trigger parsing
    chrome.tabs.sendMessage(tabId, { action: 'parsePage' });
  } catch (error) {
    console.error('Error injecting content script:', error.message);
  }
}

// Listen for messages from the extension
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'marksman') {
    // Inject content script and send parsePage event when the "FIRE" button is clicked
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const currentTab = tabs[0];
      if (currentTab) {
        injectContentScriptAndParsePage(currentTab.id);
      }
    });
  } else if (request.action === 'updateCheckbox') {
    // Update checkbox state in Chrome storage
    chrome.storage.sync.set({ 'infiniteMode': request.checked });

    // If checkbox is checked, inject content script into all tabs
    if (request.checked) {
      chrome.tabs.query({}, function(tabs) {
        tabs.forEach(function(tab) {
          injectContentScriptAndParsePage(tab.id);
        });
      });
    }
  }
});

// Listen for tab updates to ensure content script is injected
chrome.webNavigation.onCommitted.addListener(function(details) {
  // Retrieve checkbox state from storage
  chrome.storage.sync.get('infiniteMode', function(data) {
    const isInfiniteMode = data.infiniteMode || false;

    // If infinite mode is enabled and the checkbox is checked, inject content script
    if (isInfiniteMode) {
      injectContentScriptAndParsePage(details.tabId);
    }
  });
}, { url: [{ schemes: ['http', 'https'] }] }); // Limit the listener to HTTP and HTTPS URLs
