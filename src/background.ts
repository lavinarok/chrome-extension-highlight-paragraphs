chrome.action.onClicked.addListener(async (tab) => {
  if (tab.id === undefined) {
    return;
  }

  try {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content/highlight.js"]
    });
  } catch (error) {
    console.error("Não foi possível destacar os parágrafos:", error);
  }
});
