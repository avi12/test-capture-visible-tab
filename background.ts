chrome.tabs.onActivated.addListener(async ({ windowId }) => {
  console.log(await chrome.tabs.captureVisibleTab(windowId));
});

export {};
