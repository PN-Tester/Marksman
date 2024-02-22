document.addEventListener('DOMContentLoaded', function () {
  // Retrieve checkbox state from storage and update UI
  const checkbox = document.getElementById('infiniteModeCheckbox');
  chrome.storage.sync.get('infiniteMode', function(data) {
    checkbox.checked = data.infiniteMode || false;
  });

  // Save checkbox state to storage when it's changed
  checkbox.addEventListener('change', function() {
    chrome.storage.sync.set({ 'infiniteMode': this.checked });
  });

  // Send a message to the background script to initiate the request
  document.getElementById('marksmanbutton').addEventListener('click', function () {
    chrome.runtime.sendMessage({ action: 'marksman' });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementsByClassName("marksman-title")[0].addEventListener("click", function() {
    var newURL = "https://github.com/PN-Tester/marksman";
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      var activeTab = tabs[0];
      chrome.tabs.update(activeTab.id, { url: newURL });
    });
  });
});
