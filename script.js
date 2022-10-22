"use strict";

const readBtn = document.querySelector(".readMore");
const title = document.querySelector(".title");
const quote = document.querySelector(".quote");
const divs = document.querySelector(".card");
const div2 = document.querySelector(".card2");
const div3 = document.querySelector(".card3");
const advicHeader = document.querySelector(".advicH1");
const catPic = document.querySelector(".image");
const header = document.querySelector(".trans");
const para = document.querySelector(".para");

let read = "more";

function laod() {
  title.classList.remove("title");
  title.classList.add("trans");
  quote.classList.remove("quote");
  quote.classList.add("trans");
}
function chooseBage() {
  divs.classList.remove("card");
  divs.classList.add("big-card");
  div2.classList.remove("card2");
  div2.classList.add("big-card2");
  div3.classList.remove("card3");
  div3.classList.add("big-card3");
}

function advice() {
  advicHeader.classList.remove("advicH1");
  advicHeader.classList.add("advice-well");
}

function imagePigger() {
  catPic.classList.remove("image");
  catPic.classList.add("image-well");
}

function headerTrans() {
  header.classList.remove("trans");
  header.classList.add("trans-well");
}

function readMore() {
  if (read === "more") {
    read = "less";
    readBtn.textContent = "READ LESS";
    para.textContent =
      "Lorem ipsum dolor sit amet, consectetur facere impedit. Ipsa, at fugit rerum nesciunt debitis ex quae error eligendi  perferendis corporis sapiente aliquam itaque consectetur vitae quasi  Minus cum reiciendis sapiente est facere impedit. Odio obcaecati omnis facilis!   Ipsa, at fugit rerum nesciunt debitis ex quae error eligendi";
  } else {
    read = "more";
    readBtn.textContent = "READ MORE";
    para.textContent =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus cumreiciendis sapiente est facere impedit. Odio obcaecati omnis facilis!Ipsa, at fugit rerum nesciunt debitis ex quae error eligendiperferendis corporis sapiente aliquam itaque consectetur vitae quasi";
  }
}
