const worlds = [
              ['Feral', 20, 20, 25, 25, 20, 20, 20, 15, 15, '9+d5', 0, 0, 0, 0],
              ['Hive', 20, 20, 20, 15, 20, 20, 20, 20, 25, '8+d5', 0, 0, 0, 0],
              ['Imperial', 20, 20, 20, 20, 20, 20, 20, 20, 20, '8+d5', 0, 0, 0, 0],
              ['Void', 20, 20, 15, 20, 20, 20, 20, 25, 20, '6+d5', 0, 0, 0, 0],
              ['Forge', 15, 20, 20, 20, 20, 25, 20, 20, 20, '7+d5', 0, 0, 0, 0]
             ];

function isItemInArray(array, item) {
    for (var i = 0; i < array.length; i++) {
        var z = 0;
        if (array[i][z] == item[z] && array[i][z] == item[z]) {
            found = worlds[i];
            return(found);
        }
    }
    return false;
}

document.getElementById("randomworld").addEventListener("click", function world_random() {
    var input = random();
    base(input)
});

function random() {
    var world = worlds[Math.floor(Math.random() * worlds.length)];
    return world;
}

function base(world) {
    var world = worlds[Math.floor(Math.random() * worlds.length)];
    var table = document.getElementById("mytable");
    document.getElementById("world-dropdown").innerHTML='<option value="1">' + world[0] + '</option>';
    populate_world_dropdown(worlds)
    for (var i = 1, row; row = table.rows[i]; i++) {
        var cell = 0;
        var replace = world[i];
        for (var j = 0, col; col = row.cells[j]; j++) {
            var pointer = parseInt(row.cells[j].innerHTML);
            cell += 1;
            if (cell == 4) {
                row.cells[j].innerHTML = replace;
            }
        }
    }
    total()
}

function getworld_dropdown() {
    var select = document.getElementById("world-dropdown");
    var currentOption = select.options[select.selectedIndex].value;
    return(currentOption);
};

document.getElementById("world-dropdown").addEventListener("change", function world_select() {
    var input = getworld_dropdown();
    var world_object = isItemInArray(worlds, input);
    base(world_object);
});

function populate_world_dropdown(worlds) {
    var select = document.getElementById("world-dropdown");
    for(var i = 0; i < worlds.length; i++) {
        var option = worlds[i][0];
        var dropdown_element = document.createElement("option");
        dropdown_element.textContent = option;
        dropdown_element.value = option;
        select.appendChild(dropdown_element);
    }
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
           cell += 1;

           if (cell == 9) {
               row.cells[j].innerHTML = totalcount;
           }

           if (/^\d+$/.test(pointer) == true) {
               totalcount = parseInt(totalcount + pointer)
           }
       }
    }
}

document.getElementById("rerollButton").addEventListener("click", rollStats);
document.getElementById("rerollButton").addEventListener("click", total);
window.onload = populate_world_dropdown(worlds);
