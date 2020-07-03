document.getElementById("rerollButton").addEventListener("click", rollStats);
document.getElementById("rerollButton").addEventListener("click", total);
document.getElementById("randomworld").addEventListener("click", rollWorld);

function rollWorld() {
    var worlds = [
                  ['Feral', 20, 20, 25, 25, 20, 20, 20, 15, 15, '9+d5'],
                  ['Hive', 20, 20, 20, 15, 20, 20, 20, 20, 25, '8+d5'],
                  ['Imperial', 20, 20, 20, 20, 20, 20, 20, 20, '8+d5'],
                  ['Void', 20, 20, 15, 20, 20, 20, 20, 25, 20, '6+d5'],
                  ['Forge', 15, 20, 20, 20, 20, 25, 20, 20, 20, '7+d5']
                ];
    var world = worlds[Math.floor(Math.random() * worlds.length)];
    console.log(world);
}

function rollStats() {
    var d10 = document.querySelectorAll(".d101,.d102");
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
       var cell = 0;
       for (var j = 0, col; col = row.cells[j]; j++) {
           var pointer = parseInt(row.cells[j].innerHTML);
           cell += 1

           if (cell == 9) {
               row.cells[j].innerHTML = totalcount;
           }

           if (/^\d+$/.test(pointer) == true) {
               totalcount = parseInt(totalcount + pointer)
           }
       }
    }
}
