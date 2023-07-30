// document.body.children[1].children[0].href = 'https://google.com';

// console.dir(document);
// alert();
// window.alert();

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

anchorElement = document.querySelector("p a"); // p a { color: red; }
anchorElement.href = "https://academind.com";

//ADD
// 1
let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://www.naver.com";
newAnchorElement.textContent = " This leads to naver";

// 2
let firstParagraph = document.querySelector("p");

// 3
firstParagraph.append(newAnchorElement);