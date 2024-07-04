"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
// const btnShowModal = document.querySelector(".show-modal"); // there are 3 show-modal with the same class, but one one show-modal is being selected to fix this we have to do this
const btnShowModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden"); // this removes the class "hidden" from the element modal, notice we don't need a . in front of it and if we add it, it won't work
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden"); // this adds the class hidden
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnShowModal.length; i++)
  btnShowModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// How to respond to keyboard events

// document.addEventListener("keydown", function () {
//   // this is going to run if any key on the key board is pressed
//   // but we want to only run this when we press esc so to do that we have to pass a parameter in the function, and so then it is going to pass a object about the event, which also as the key that was pressed
//   // if we add the event listener here it is going to listen for an event in the whole page, and not only a single element, what we were doing earlier
//   console.log("A key was pressed");
// });

document.addEventListener("keydown", function (e) {
  console.log(e["key"]); // key contains the info about the key that was pressed
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    // this checks if the modal contains the class hidden and anf if it doesn't not then we call the close Modal function
    closeModal();
  }
});
