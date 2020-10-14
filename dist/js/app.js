//data model
const people = [
  {
    id: 1,
    name: "Tanya Sinclair",
    job: "UX Enginner",
    img: "images/image-tanya.jpg",
    text:
      "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ",
  },
  {
    id: 2,
    name: "John Tarkpor",
    job: "junior Front-end Developer",
    img: "images/image-john.jpg",
    text:
      "If you want to lay the best foundation possible I'd recommend taking this course. The depth that instructors go into is inredible. I now feel so confident about starting up as a professional developer.",
  },
];

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const fullName = document.querySelector(".text--name");
const jobtitle = document.querySelector(".text--jobtitle");
const image = document.querySelector(".img");
const quote = document.querySelector(".text--quote");

//grab the first person in the array
let currentPerson = 0;

//set the values in the html document
function getPerson() {
  const person = people[currentPerson];
  image.src = person.img;
  fullName.textContent = person.name;
  jobtitle.textContent = person.job;
  quote.textContent = person.text;
}

//move to the next person in the array
nextBtn.addEventListener("click", function () {
  currentPerson++;
  //if current person is greater than the length of the array reset it
  if (currentPerson > people.length - 1) {
    currentPerson = 0;
  }
  getPerson();
});

//move to the pervious person in the array
prevBtn.addEventListener("click", function () {
  currentPerson--;
  if (currentPerson < 0) {
    currentPerson = people.length - 1;
  }
  getPerson();
});

//when the html document has been completely loaded and parsed get the first perosn in the array of objects
window.addEventListener("DOMContentLoaded", function () {
  getPerson();
});
