/** @format */

function searchText() {
  const searchText = document.getElementById("search").value.toLowerCase();
  const textArea = document.getElementById("text");
  const text = textArea.value;
  const output = document.getElementById("output");
  const words = text.split(/\s+/);

  output.innerHTML = "";

  words.forEach(function (word) {
    if (word.toLowerCase().includes(searchText)) {
      const span = document.createElement("span");
      span.textContent = word + " ";
      span.classList.add("highlight");
      output.appendChild(span);
    } else {
      output.innerHTML += word + " ";
    }
  });
}

document.getElementById("search").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    searchText();
  }
});
