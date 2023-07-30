// 운동 시간!

// 1. "DOM에 드릴링"하여 <h1> 요소를 선택하고
// 원하는 이름을 가진 변수에 저장
let h1Element = document.body.firstElementChild;
// h1Element = document.body.Children[2];

console.dir(h1Element);
// 2. (1)의 변수를 사용하여 "부모"에 접근합니다
// 저장된 <h1> 요소의 요소(즉, <본체> 요소)
console.dir(h1Element.parentElement);

// 보너스: (1)의 변수를 사용하여 액세스합니다
// 형제 요소(즉, <h1> 요소 옆에 있는 <p> 요소)
console.dir(h1Element.nextElementSibling);

// 3. getElementById로 <h1> 요소를 선택하고 저장합니다
// 동일한 변수 또는 새 변수(사용자에 따라 다름)

h1Element = document.getElementById("first-title");
console.dir(h1Element);

// 4. querySelector를 사용하여 두 번째 <p> 요소를 선택합니다(가능)
// HTML 코드에 무언가를 추가해야 합니다(예: 클래스)
// 선택한 이름으로 새 변수에 저장합니다

let highlightedParagraph = document.querySelector(".hightlighted-paragraph");
console.dir(highlightedParagraph);
// 5. 보너스 과제: <p> 요소의 텍스트 내용 변경 시도
// (4)에서 선택하고 선택한 다른 텍스트로 설정합니다

highlightedParagraph.textContent = "This was changed by Max!";