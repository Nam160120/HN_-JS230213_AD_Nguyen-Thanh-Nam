let listReview = [];
function renderListReview() {
    let result = "";
    let listReview = JSON.parse(localStorage.getItem("listReview"));
    for (let i = 0; i < listReview.length; i++) {
        result +=
            `
         <div>
            <tr>
                <td>${listReview[i]}</td>
                <div class=buttonn>
                <td><button onclick="editReview(${i})">[edit]</button></td>
                <td><button onclick="deleteReview(${i})">[x]</button></td>
                </div>
            </tr>
        </div>
        `
    } document.getElementById("table").innerHTML = result;
}
renderListReview()
function addReview() {
    let valueInput = document.getElementById("input").value;
    if (listReview == null) {
        listReview = [];
        listReview.push(valueInput);
        localStorage.setItem("listReview", JSON.stringify(listReview));
        console.log(111)
    } else {
        listReview.push(valueInput);
        localStorage.setItem("listReview", JSON.stringify(listReview))
        console.log(222)
    }
    renderListReview();
    document.getElementById("input").value = "";
    let valueSpan = document.getElementById("review");
    let currentValue = parseInt(valueSpan.innerHTML);
    let newValue = currentValue + 1;
    valueSpan.innerHTML = newValue;
}
function editReview(id) {
    document.getElementById("input").value = listReview[id];
    console.log(333)
    let valueChangeInput = prompt(`Update Review,${listReview[id]}`);
    listReview.splice(id, 1, valueChangeInput);
    localStorage.setItem("listReview", JSON.stringify(listReview));
    renderListReview();
    document.getElementById("input").value = "";
}
function deleteReview(id) {
    console.log(444)
    listReview.splice(id, 1);
    localStorage.setItem("listReview", JSON.stringify(listReview));
    renderListReview();
}
function buttonPoint(){
    console.log(555,"T_T", "ít time quá thầy ơi")
    let numberButtons = document.querySelectorAll(".buttomPoint");
// numberButtons.forEach(function(button) {
//   button.addEventListener("click", function() {
    let sum = 0;
    numberButtons.forEach(function(button) {
      sum += parseInt(button.innerText);
    });
    let average = sum / numberButtons.length;
    let valueSpanPoint = document.getElementById("rating");
    let currentValue = parseInt(valueSpanPoint.innerHTML);
    // let newValuePoint = currentValue + average;
    valueSpanPoint.innerHTML = average;
//   });
// });
}
