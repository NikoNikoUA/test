Task:
Create applications to test password strength.

The essence of the assignment:
Create a field for entering a password, under the field add 3 sections which will show the strength of the password;
Changes in password strength must take place in real time;
How to calculate the strength of a password:
Only letters/digits/symbols - the password is easy;
Combination of letters-symbols/letters-digits/digits-symbols - the password is medium;
Has letters, symbols and numbers - the password is strong;
The color of the sections will depend on the strength of the password:
If the field is empty, all sections are gray;
If the field has less than 8 characters, all sections are red;
If the password is easy - the first section is red the rest are gray;
If the password is medium - the first two sections are yellow the last one is gray;
If the password is strong, all sections are green;

const input = document.querySelector(".input");
const sections = document.querySelectorAll("p");
const weak = document.querySelector(".weak");
const strong = document.querySelector(".strong");
const king = document.querySelector(".king");

input.addEventListener("input", onInput);

function onInput(event) {
event.preventDefault();
const password = event.target.value;
const passLength = password.length;

const hasLetters = /^[a-zA-Z]+$/.test(password);
  const hasNumbers = /^[0-9]+$/.test(password);
const hasSymbols = /[!@#$%^&*(),.?":{}|<>+-=\/`~;]/.test(password);

if (passLength === 0) {
sections.forEach((section) => {
console.log(section);
section.classList.replace("red", "grey");
weak.style.color = "grey";
strong.style.color = "grey";
king.style.color = "grey";
});
} else if (passLength < 8 && passLength > 0) {
sections.forEach((section) => {
section.classList.replace("grey", "red");
});
} else if ((hasLetters || hasNumbers || hasSymbols) && passLength >= 8) {
weak.style.color = "red";
strong.style.color = "grey";
king.style.color = "grey";
} else if (
(hasLetters && hasNumbers) ||
(hasLetters && hasSymbols) ||
(hasNumbers && hasSymbols)
) {
weak.style.color = "yellow";
strong.style.color = "yellow";
king.style.color = "grey";
} else if (hasLetters && hasNumbers && hasSymbols) {
sections.forEach((section) => {
section.style.color = "green";
});
}
}
