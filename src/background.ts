chrome.runtime.onMessage.addListener((message) => {
  const supportedActions = [
    "HIGHLIGHT_PARAGRAPHS",
    "FILL_TEST_FORM"
  ];

  if (!supportedActions.includes(message?.type)) {
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

      const scriptFile =
        message.type === "HIGHLIGHT_PARAGRAPHS"
          ? "content/highlight.js"
          : "content/fill-form.js";

      await chrome.scripting.executeScript({
        target: {
          tabId: tab.id
        },
        files: [scriptFile]
      });
    } catch (error) {
      console.error(
        "Não foi possível executar a ação:",
        error
      );
    }
  })();
});
