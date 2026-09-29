chrome.runtime.onMessage.addListener((message) => {
  if (message?.type !== "HIGHLIGHT_PARAGRAPHS") {
    return;
  }

  void (async () => {
    try {
      const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
      });

      if (tab.id === undefined) {
        return;
      }

      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["content/highlight.js"]
      });
    } catch (error) {
      console.error("Não foi possível destacar os parágrafos:", error);
    }
  })();
});
