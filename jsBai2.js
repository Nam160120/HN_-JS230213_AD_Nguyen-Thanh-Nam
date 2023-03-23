let listPlayer = JSON.parse(localStorage.getItem("listPlayer"));
function addButton() {
    console.log(111);
    let namePlayer = document.getElementById("name").value;
    let pnt = 0;
    let player = {
        name: namePlayer,
        point: pnt,
    };
    if (listPlayer == null) {
        listPlayer = [];
        listPlayer.push(player);
        localStorage.setItem("listPlayer", JSON.stringify(listPlayer));
    } else {
        listPlayer.push(player);
        localStorage.setItem("listPlayer", JSON.stringify(listPlayer));
    }
    renderPlayer();
    renderCount();
}
function renderPlayer() {
    let result = "";
    for (i = 0; i < listPlayer.length; i++) {
        result += `
                <tr>
                    <td><button onclick="deleteButton(${i})">x</button></td>
                    <td>${listPlayer[i].name}</td>
                    <td><button onclick="minusPoint(${i})">-</button></td>
                    <td>${listPlayer[i].point}</td>
                    <td><button onclick="plusPoint(${i})">+</button></td>
                </tr>
                `;
    }
    document.getElementById("table").innerHTML = result;
}
function deleteButton(index) {
    listPlayer.splice(index, 1);
    localStorage.setItem("listPlayer", JSON.stringify(listPlayer));
    renderPlayer();
    renderCount();
}
function plusPoint(index) {
    listPlayer[index].point++;
    localStorage.setItem("listPlayer", JSON.stringify(listPlayer));
    renderPlayer();
    renderCount();
}

function minusPoint(index) {
    listPlayer[index].point--;
    localStorage.setItem("listPlayer", JSON.stringify(listPlayer));
    renderPlayer();
    renderCount();
}
function renderCount() {
    let a = 0;
    for (i = 0; i < listPlayer.length; i++) {
        a += listPlayer[i].point;
        sum = a;
    }
    let result = `
<div class ="playAndPoint">
                <div>Player:${listPlayer.length}</div>
                <div>Total Points:${sum}</div>
           </div>      
            `;
    console.log("111111111111");
    document.getElementById("headerInput").innerHTML = result;
}
renderPlayer();
renderCount();