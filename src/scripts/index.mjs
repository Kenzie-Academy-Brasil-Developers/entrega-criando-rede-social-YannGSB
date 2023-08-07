import { posts } from "./database.mjs";

function handleModal() {
  const modalContainer = document.querySelector(".modal");
  const button1 = document.querySelector("#feed__button1");
  const button2 = document.querySelector("#feed__button2");
  const button3 = document.querySelector("#feed__button3");

  button1.addEventListener("click", function () {
    renderPostModal(posts[0]);
    modalContainer.showModal();
    closeModal();
  });

  button2.addEventListener("click", function () {
    renderPostModal(posts[1]);
    modalContainer.showModal();
    closeModal();
  });

  button3.addEventListener("click", function () {
    renderPostModal(posts[2]);
    modalContainer.showModal();
    closeModal();
  });
}

function renderPostModal(post) {
  const modal = document.querySelector(".modal");
  const modalContainer = document.createElement("div");
  const modalUserInfo = document.createElement("div");
  const userDetails = document.createElement("div")
  const userImg = document.createElement("img");
  const userName = document.createElement("h2");
  const userProfession = document.createElement("p");
  const postTitle = document.createElement("h2");
  const postText = document.createElement("p");
  const buttonClose = document.createElement("button");

  userImg.src = post.img;
  userName.innerText = post.user;
  userProfession.innerText = post.stack;
  postTitle.innerText = post.title;
  postText.innerText = post.text;
  buttonClose.innerText = "X";

  modalContainer.classList.add("modal__container");
  modalUserInfo.classList.add("modal__userInfo");
  userImg.classList.add("modal__img");
  userDetails.classList.add("modal__userDetails")
  userName.classList.add("modal__userName");
  userProfession.classList.add("modal__userProfession");
  postTitle.classList.add("modal__postTitle");
  postText.classList.add("modal__postText");
  buttonClose.classList.add("modal__close");

  modal.innerHTML = "";

  modalContainer.appendChild(modalUserInfo);
  modalUserInfo.appendChild(userImg);
  
  userDetails.appendChild(userName);
  userDetails.appendChild(userProfession);
  modalContainer.appendChild(postTitle);
  modalContainer.appendChild(postText);
  modalContainer.appendChild(buttonClose);
  modalUserInfo.appendChild(userDetails)

  modal.appendChild(modalContainer);
}

function closeModal() {
  const buttonClose = document.querySelector(".modal__close");
  const modal = document.querySelector(".modal");

  buttonClose.addEventListener("click", function () {
    modal.close();
  });
}

handleModal();
closeModal();