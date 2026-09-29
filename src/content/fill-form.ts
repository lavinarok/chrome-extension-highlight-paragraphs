(() => {
  function fillField(
    selector: string,
    value: string
  ): boolean {
    const element =
      document.querySelector<
        HTMLInputElement | HTMLTextAreaElement
      >(selector);

    if (!element) {
      return false;
    }

    element.focus();
    element.value = value;

    element.dispatchEvent(
      new Event("input", {
        bubbles: true
      })
    );

    element.dispatchEvent(
      new Event("change", {
        bubbles: true
      })
    );

    return true;
  }

  let filledFields = 0;

  if (fillField("#name", "Usuário de teste")) {
    filledFields++;
  }

  if (fillField("#email", "teste@example.com")) {
    filledFields++;
  }

  if (fillField("#subject", "Teste da extensão")) {
    filledFields++;
  }

  if (
    fillField(
      "#message",
      "Esta mensagem foi preenchida automaticamente pela extensão."
    )
  ) {
    filledFields++;
  }

  console.log(
    `Extensão: ${filledFields} campo(s) preenchido(s).`
  );
})();
