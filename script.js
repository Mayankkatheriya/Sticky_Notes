let data = document.querySelector("form");
let noteContainer = document.querySelector(".note-container");
data.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(e.target);
  let text = e.target[0].value;
  let noteColor = e.target[1].value;
  let div = document.createElement("div");
  div.style.backgroundColor = noteColor;
  div.classList.add("myNote");
  div.innerHTML = `<p class = "note-text">${text}</p>
    <p class="pin">📌</p>
    <div class = "btn-container">
    <button class="deleteBtn">🗑</button>
    <button class="EditBtn">🖊</button>
    <button class="saveBtn">📁</button>
    </div>`;
  if (text == "") {
    alert("Please enter a valid Note");
  } else {
    noteContainer.appendChild(div);
    e.target[0].value = "";
  }
  activateButton();
});
// Delete Button Event Listener
function activate(e) {
  let btnTarget = e.target.textContent;
  let para = e.target.parentElement.parentElement.querySelector(".note-text");
  let saveBtn = e.target.parentElement.querySelector(".saveBtn");
  if (btnTarget === "🗑") {
    e.target.parentElement.parentElement.remove();
  } else if (btnTarget === "🖊") {
    let para = e.target.parentElement.parentElement.querySelector(".note-text");
    para.contentEditable = true;
    para.style.backgroundColor = "rgb(161, 239, 245)";
    saveBtn.style.display = "block";
  } else {
    para.contentEditable = false;
    para.style.backgroundColor = "transparent";
    saveBtn.style.display = "none";
  }
}
function activateButton() {
  [...document.querySelectorAll(".btn-container")].map((el) => {
    console.log(el);
    el.addEventListener("click", activate);
  });
}
