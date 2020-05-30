let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (
    mySrc ===
    "https://design.firefox.com/product-identity/firefox/firefox/firefox-logo.png"
  ) {
    myImage.setAttribute(
      "src",
      "https://zdnet1.cbsistatic.com/hub/i/2019/01/24/8846aae5-12e1-4208-a89e-48bb745b6327/mozilla-fenix-new-android-browsers-intri-5c49ab7860b2b586408754da-1-jan-24-2019-12-14-06-poster.jpg"
    );
  } else {
    myImage.setAttribute(
      "src",
      "https://design.firefox.com/product-identity/firefox/firefox/firefox-logo.png"
    );
  }
};

let myButton = document.querySelector("button");
myButton.onclick = function () {
  setUserName();
};

let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.innerHTML = "Mozilla is cool, " + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla is cool, " + storedName;
}
