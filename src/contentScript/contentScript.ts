chrome.runtime.sendMessage("Content script", (response) => {
  console.log(response);
});
