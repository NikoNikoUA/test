const input = document.querySelector(".input");
const sections = document.querySelectorAll("#colorBlocks p");

input.addEventListener("input", onInput);

function onInput(event) {
  const password = event.target.value;
  const passLength = password.length;

  if (passLength === 0) {
    sections.forEach((section) => {
      section.className = "grey";
    });
  } else if (passLength < 8) {
    sections.forEach((section) => {
      section.className = "red";
    });
  } else {
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (hasLetters && hasNumbers && hasSymbols && passLength) {
      sections.forEach((section) => (section.className = "green"));
    } else if (
      ((hasLetters && hasNumbers) ||
        (hasLetters && hasSymbols) ||
        (hasNumbers && hasSymbols)) &&
      passLength
    ) {
      sections[0].className = sections[1].className = "yellow";
      sections[2].className = "grey";
    } else if ((hasLetters || hasNumbers || hasSymbols) && passLength) {
      sections[0].className = "red";
      sections[1].className = sections[2].className = "grey";
    }
  }
}
