document.getElementById("rerollButton").addEventListener("click", rollStats);
document.getElementById("rerollButton").addEventListener("click", total);

function total() {
    let thetable
}

function rollStats() {
    var d10 = document.querySelectorAll(".class1,.class2");
    for (var i = 0; i < d10.length; ++i) {
        var result = Math.floor(Math.random()*10) + 1;
        var item = d10[i];
        item.innerHTML = result;
    }
}

function total() {
    var table = document.getElementById("mytable");
    for (var i = 0, row; row = table.rows[i]; i++) {
       console.log('cell')
       //rows would be accessed using the "row" variable assigned in the for loop
       for (var j = 0, col; col = row.cells[j]; j++) {
           console.log('row')
         //iterate through columns
         //columns would be accessed using the "col" variable assigned in the for loop
       }
    }
}
