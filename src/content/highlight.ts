(() => {
  const STYLE_ID = "chrome-extension-highlight-paragraphs-style";
  const HIGHLIGHT_CLASS = "chrome-extension-highlight-paragraph";

  if (!document.getElementById(STYLE_ID)) {
    const style = document.createElement("style");

    style.id = STYLE_ID;
    style.textContent = `
      .${HIGHLIGHT_CLASS} {
        background-color: #fff59d !important;
        outline: 2px solid #f9a825 !important;
      }
    `;

    document.head.appendChild(style);
  }

  document
    .querySelectorAll<HTMLParagraphElement>("p")
    .forEach((paragraph) => {
      paragraph.classList.add(HIGHLIGHT_CLASS);
    });
})();
