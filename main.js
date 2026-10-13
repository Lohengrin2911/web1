const myImage =
document.querySelector("img");
myImage.addEventListener("click" , () => {
    const mySrc =
    myImage.getAttribute("src");
        if (mySrc ===
            "images/cala_a_n.png") {
                myImage.setAttribute("src", "images/cala_n_a.png");
            } else {
                myImage.setAttribute("src","images/cala_a_n.png");
            }
});
const listItems =
document.querySelectorAll("li");
function toggleDone(e) {
    if (!e.target.className) {
        e.target.className = "done";
    } else {
        e.target.className = "";   
    }
}
listItems.forEach((item) => {
    item.addEventListener("click", toggleDone);
});
//
let myButton =
document.querySelector("button");
let myHeading =
document.querySelector("h1");
//
function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Wellcome: ${myName}`;
  }
if
(!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Wellcome: ${storedName}`;
}
//
myButton.addEventListener("click", () => {
    setUserName();
});
//
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Wellcome: ${myName}`;
  }
}