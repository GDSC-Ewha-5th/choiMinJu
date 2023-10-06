function changeTheme() {
  const body = document.querySelector("body");
  body.style.backgroundColor =
    body.style.backgroundColor === "black" ? "#efefef" : "black";
  body.style.color = body.style.color === "white" ? "black" : "white";
  const nav = document.querySelector("nav ul");
  nav.style.color = nav.style.color === "#333" ? "white" : "#333";
}

function changeColor(selectedItem) {
  console.log(selectedItem);
  // 모든 항목에서 "selected" 클래스 제거
  const items = document.querySelectorAll(".select-order");
  items.forEach((item) => item.classList.remove("selected"));

  // 선택된 항목에 "selected" 클래스 추가
  selectedItem.classList.add("selected");
}
