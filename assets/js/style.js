const placeholderText = "masukan nama panggilanmu..";
const inputField = document.getElementById("inputUsername");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const button = document.getElementById("buttonLanjut");

function typeText(elementId, text, delay = 100, callback = null) {
  const element = document.getElementById(elementId);
  let index = 0;

  function typeChar() {
    if (index < text.length) {
      element.textContent += text[index];
      index++;
      setTimeout(typeChar, delay);
    } else if (callback) {
      callback();
    }
  }

  typeChar();
}

function typePlaceholder() {
  let index = 0;

  function typeChar() {
    if (index < placeholderText.length) {
      inputField.setAttribute(
        "placeholder",
        placeholderText.substring(0, index + 1)
      );
      index++;
      setTimeout(typeChar, 150);
    }
  }

  typeChar();
}

inputField.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const inputValue = inputField.value.trim();
    if (inputValue) {
      inputField.classList.add("hidden");
      line1.classList.remove("hidden");
      line2.classList.remove("hidden");
      typeText("line1", `Selamat Datang, ${inputValue}!`, 100, () => {
        typeText("line2", "portfolio damarazky", 100, () => {
          typeText(
            "buttonLanjut",
            "Lanjut Ke Halaman",
            100,
            button.classList.add("btn")
          );
        });
      });
    }
  }
});

typePlaceholder();
// Memulai efek typing
typeText("line1", text1, 100, () => {
  typeText("line2", text2, 100, () => {});
});
