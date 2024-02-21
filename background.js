chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'marksman') {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const currentTab = tabs[0];
      if (currentTab) {
        const currentUrl = currentTab.url;
        chrome.tabs.executeScript(currentTab.id, { file: 'content.js' }, function() {
          // Script injected, now send a message to content script to trigger parsing
          chrome.tabs.sendMessage(currentTab.id, { action: 'parsePage'});
        });
      }
    });
  }
});

// Listen for tab updates to ensure content script is injected only once
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete') {
    // Do nothing here to prevent additional injection
  }
});