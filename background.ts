chrome.action.onClicked.addListener(async tab => {
  await chrome.tabs.create({
    url: await chrome.tabs.captureVisibleTab(tab.windowId)
  });
});

export {};
