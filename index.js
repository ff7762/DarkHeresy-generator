document.getElementById("rerollButton").addEventListener("click", rollStats);
document.getElementById("rerollButton").addEventListener("click", total);

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
    for (var i = 1, row; row = table.rows[i]; i++) {
       var totalcount = 0;
       var cell = 0
       for (var j = 0, col; col = row.cells[j]; j++) {
           var pointer = parseInt(row.cells[j].innerHTML);
           cell += 1

           if (cell == 9){
               row.cells[j].innerHTML = totalcount
           }

           if (/^\d+$/.test(pointer) == true) {
               totalcount = parseInt(totalcount + pointer)
           }
       }
    }
}
