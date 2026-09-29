const colorInput =
  document.querySelector<HTMLInputElement>("#highlight-color");

const colorOptions =
  document.querySelectorAll<HTMLButtonElement>(".color-option");

const statusElement =
  document.querySelector<HTMLParagraphElement>("#status");

const fillFormButton =
  document.querySelector<HTMLButtonElement>(
    "#fill-form-button"
  );

async function applyHighlight(color: string): Promise<void> {
  await chrome.storage.local.set({
    highlightColor: color
  });

  await chrome.runtime.sendMessage({
    type: "HIGHLIGHT_PARAGRAPHS"
  });

  updateSelectedColor(color);

  if (statusElement) {
    statusElement.textContent = "✓ Cor aplicada";
  }
}

function updateSelectedColor(color: string): void {
  if (colorInput) {
    colorInput.value = color;
  }

  colorOptions.forEach((option) => {
    option.classList.toggle(
      "selected",
      option.dataset.color === color
    );
  });
}

async function loadSavedColor(): Promise<void> {
  const { highlightColor } =
    await chrome.storage.local.get("highlightColor");

  const color =
    typeof highlightColor === "string"
      ? highlightColor
      : "#fff59d";

  updateSelectedColor(color);
}

colorOptions.forEach((option) => {
  option.addEventListener("click", async () => {
    const color = option.dataset.color;

    if (!color) {
      return;
    }

    await applyHighlight(color);
  });
});

colorInput?.addEventListener("change", async () => {
  await applyHighlight(colorInput.value);
});

fillFormButton?.addEventListener(
  "click",
  async () => {
    await chrome.runtime.sendMessage({
      type: "FILL_TEST_FORM"
    });

    if (statusElement) {
      statusElement.textContent =
        "✓ Preenchimento solicitado";
    }
  }
);

void loadSavedColor();
