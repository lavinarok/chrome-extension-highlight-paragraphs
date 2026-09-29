void (async () => {
  const STYLE_ID = "chrome-extension-highlight-paragraphs-style";
  const HIGHLIGHT_CLASS = "chrome-extension-highlight-paragraph";

  const { highlightColor } = await chrome.storage.local.get(
    "highlightColor"
  );

  const color =
    typeof highlightColor === "string"
      ? highlightColor
      : "#fff59d";

  let style = document.getElementById(
    STYLE_ID
  ) as HTMLStyleElement | null;

  if (!style) {
    style = document.createElement("style");
    style.id = STYLE_ID;
    document.head.appendChild(style);
  }

  style.textContent = `
    .${HIGHLIGHT_CLASS} {
      background-color: ${color} !important;
      outline: 2px solid ${color} !important;
    }
  `;

  document
    .querySelectorAll<HTMLParagraphElement>("p")
    .forEach((paragraph) => {
      paragraph.classList.add(HIGHLIGHT_CLASS);
    });
})();
