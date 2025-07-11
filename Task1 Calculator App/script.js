
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll("button");

  buttons.forEach(button => {
    const value = button.dataset.value;
    const action = button.dataset.action;

    button.addEventListener("click", () => {
      if (value) {
        display.value += value;
      }

      if (action === "clear") {
        display.value = "";
      }

      if (action === "delete") {
        display.value = display.value.slice(0, -1);
      }

      if (action === "calculate") {
        try {
          display.value = eval(display.value);
        } catch {
          display.value = "Error";
        }
      }
    });
  });

