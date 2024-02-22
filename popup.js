document.addEventListener('DOMContentLoaded', function () {
  const textSpan = document.getElementById("text");
  const spinner = document.getElementById("spinner");
  const dots = document.getElementById("dotsContainer")
  document.getElementById('marksmanbutton').addEventListener('click', function () {
    // Send a message to the background script to initiate the request
    chrome.runtime.sendMessage({ action: 'marksman' });
    textSpan.classList.add("hidden");
    spinner.classList.remove("hidden");
    dots.classList.add("hidden");
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
