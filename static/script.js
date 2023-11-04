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

function fetchData(endpoint, selectedItem) {
  console.log("fetch" + selectedItem);
  changeColor(selectedItem);
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        const postData = data.data;
        displayPosts(postData);
      }
    });
}

function displayPosts(postData) {
  const container = document.querySelector(".posting-container");
  container.innerHTML = ""; // 기존 포스트 데이터를 지워줍니다.

  postData.forEach((post) => {
    const cardHTML = `
            <div class="posting-card">
                <a href="https://velog.io${post["post_url"]}" class="post-url">
                    <img src="${post["thumbnail_url"]}" alt="썸네일" class="thumbnail-url" />
                </a>
                <h4 class="title">${post["title"]}</h4>
                <div class="description-wrapper">
                    <p class="description">${post["description"]}</p>
                </div>
                <div class="sub-info">
                    <span class="date">${post["date"]}</span>
                    <span>|</span>
                    <span class="comment-count">댓글: ${post["comment_count"]}개</span>
                </div>
                <a href="#" class="userinfo">
                    <img src="${post["author_profile_url"]}" alt="작성자 프로필" class="author-profile-url" />
                    <b class="author-name">${post["author_name"]}</b>
                </a>
                <div class="likes">${post["likes"]} 좋아요</div>
            </div>
        `;

    //container.insertAdjacentHTML("beforeend", cardHTML);
  });
}

function toggleDropdown() {
  const dropdown = document.getElementById("dropdownMenu");
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
}

function selectOption(text) {
  const dropdownButton = document.querySelector(".dropdown > button");
  dropdownButton.textContent = text;

  const dropdownOptions = document.querySelectorAll(".dropdown-content a");
  dropdownOptions.forEach((opt) => {
    if (opt.textContent === text) {
      opt.classList.add("selected");
    } else {
      opt.classList.remove("selected");
    }
  });

  toggleDropdown();
}

// 페이지 로드 시 트렌딩 데이터 기본값
// window.onload = function () {
//   const trendingItem = document.querySelector(".select-order.selected");
//   fetchData("/run-script", trendingItem);
//   //머리 어지러워서 여기서만 인자 전달 안해줘서 undefined 난 거 계속 놓치고 헤매고 있엇음...
// };

//와 ㄹㅈㄷ 바보 여기서 계속 트렌딩 데이터 기본값 불러와서 계속 html 재 로딩되고 내가 만들어놓은 거 사라지는 거였는데 이걸 몰라서... 밤을 샜네......
//log 확인을 잘하자...

// write.html
const tagInput = document.getElementById("tagInput");
const tagsList = document.querySelector(".tags-list");

tagInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter" && this.value.trim() !== "") {
    const tagValue = this.value.trim().toLowerCase(); // 중복 체크를 쉽게 하기 위해 소문자로 변환
    if (!checkDuplicate(tagValue)) {
      createTag(tagValue);
      this.value = "";
    } else {
      alert("중복된 태그입니다!");
      this.value = "";
    }
  }
});

function checkDuplicate(value) {
  const tags = document.querySelectorAll(".tag");
  for (let tag of tags) {
    if (tag.textContent.toLowerCase() === value) {
      return true;
    }
  }
  return false;
}

function createTag(value) {
  const tag = document.createElement("div");
  const tagText = document.createTextNode(value);
  tag.appendChild(tagText);
  tag.classList.add("tag");
  tag.addEventListener("click", function () {
    this.remove();
  });
  tagsList.appendChild(tag);
}

function submitURL() {
  const url = document.getElementById("urlInput").value;
  localStorage.clear();

  fetch("/process-url", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: url }),
  })
    .then((response) => response.json())
    .then((data) => {
      // 로컬 스토리지에 정보 저장
      console.log(JSON.stringify(data));
      localStorage.setItem("postData", JSON.stringify(data));
      console.log(localStorage.getItem("postData"));

      // index.html 페이지로 리다이렉트
      window.location.href = "/";
    })
    .catch((error) => {
      console.error(
        "There was a problem with the fetch operation:",
        error.message
      );
    });
}

function redirectToFlaskEndpoint() {
  fetch("/redirect-to-index").then((response) => {
    if (response.redirected) {
      window.location.href = response.url;
    }
  });
}

//모달창
// 모달 요소와 모달 닫기 버튼을 가져옵니다

// 모달을 열어주는 함수
function showModal(data) {
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];
  console.log("epdlxjepdlxj");
  console.log(data);
  document.getElementById("modal-image").src = data.image_url;
  document.getElementById("modal-title").textContent = data.title;
  document.getElementById("modal-description").textContent = data.description;
  document.getElementById("modal-date").textContent = data.date;
  document.getElementById(
    "modal-comment-count"
  ).textContent = `댓글: ${data.comment_count}개`;
  document.getElementById("modal-user-profile").src = data.user_profile_url;
  document.getElementById("modal-username").textContent = data.username;
  document.getElementById(
    "modal-likes"
  ).textContent = `좋아요: ${data.like_count}`;

  // 모달을 보이게 합니다
  modal.style.display = "block";

  // 모달 닫기 버튼에 클릭 이벤트 핸들러를 추가합니다
  span.onclick = function () {
    modal.style.display = "none";
  };

  // 모달 외부를 클릭할 경우 모달을 닫습니다
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
//var modal을 처음에 전역으로 설정해서 모달창이 진짜 겁나리 안뜸. 근데 어차피 다 showmodal 안에서만 사용되고 가공되는 값이니까
//그냥 함수 안에 넣어주니까 잘 됨.

// 포스팅 카드 클릭 이벤트
// document.addEventListener(
//   "click",
//   function (event) {
//     if (event.target.closest(".posting-card")) {
//       var card = event.target.closest(".posting-card");
//       var data = {
//         image_url: card.querySelector(".thumbnail-url").getAttribute("src"),
//         title: card.querySelector(".title").textContent,
//         description: card.querySelector(".description").textContent,
//         date: card.querySelector(".date").textContent,
//         comment_count: card
//           .querySelector(".comment-count")
//           .textContent.match(/\d+/)[0], // 숫자만 추출
//         user_profile_url: card
//           .querySelector(".author-profile-url")
//           .getAttribute("src"),
//         username: card.querySelector(".author-name").textContent,
//         like_count: card.querySelector(".likes").textContent.match(/\d+/)[0], // 숫자만 추출
//       };
//       showModal(data);
//     }
//   },
//   false
// );
