const file_path = "scripts/print-ibkr-key-ratio-data.js";

chrome.action.onClicked.addListener(async (tab) => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const activeTab = tabs[0]; // Get the active tab
    chrome.scripting.executeScript({
      target: { tabId: activeTab.id },
      files: [file_path],
    });
  });
});
