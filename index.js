const worlds = [
                   ['Feral', 20, 20, 25, 25, 20, 20, 20, 15, 15, '9+d5', 0, 0, 0, 0, "Iron Stomach, Primitive, Rite of Passage, Wilderness Savvy", "Speak Language (Tribal Dialect) (Int); Navigation (Surface) (Int) (Wild. Sav.), Survival (Int) (Wild. Sav.), and Tracking (Int) (Wild. Sav.) as Basic Skills", "None"],
                   ['Hive', 20, 20, 20, 15, 20, 20, 20, 20, 25, '8+d5', 0, 0, 0, 0, "Accustomed to Crowds, Caves of Steel, Hivebound, Wary", "Speak Language (Hive Dialect) (Int); Tech-Use (Int) (Caves of Steel) as Basic Skill", "None"],
                   ['Imperial', 20, 20, 20, 20, 20, 20, 20, 20, 20, '8+d5', 0, 0, 0, 0, "Blessed Ignorance, Hagiography, Litugical Familiarity, Superior Origins", "Common Lore (Imperial Creed) (Int) (Hagi.), Common Lore (Imperium) (Int) (Hagi.), Common Lore (War) (Int) (Hagi.), Literacy (Int) (Lit. Fam.), Speak Language (High Gothic) (Int) (Lit. Fam.) as Basic Skills", "None"],
                   ['Void', 20, 20, 15, 20, 20, 20, 20, 25, 20, '6+d5', 0, 0, 0, 0, "Charmed, Ill-Omened, Shipwise, Void Accustomed", "Speak Language (Ship Dialect) (Int); Navigation (Stellar) (Int) (Shipwise), Pilot (Starcraft) (Ag) (Shipwise) as Basic Skills", "None"],
                   ['Forge', 15, 20, 20, 20, 20, 25, 20, 20, 20, '7+d5', 0, 0, 0, 0, "Fit for Purpose, Stranger to the Cult, Credo Omnissiah", "Common Lore (Tech) (Int) and Common Lore (Machine Cult) (Int) as Basic Skills", "Technical Knock (Credo Omnissiah)"]
               ];

const careers = [
                   [
                       ['Arbitrator'],
                       ['Speak Language (Low Gothic) (Int), Literacy (Int), Common Lore (Adeptus Arbites) (Int), Common Lore (Imperium) (Int), Inquiry (Fel)'],
                       ['Basic Weapons Training (SP), Melee Weapons Training (Primitive)', '<select name="gchoice2"><option value="Quick Draw">Quick draw</option><option value="Rapid reload">Rapid reload</option></select>'],
                       ['shotgun and 12 shells, club, brass knuckles, knife, uniform (Good Quality Clothing), 3 doses of stimm, injector, Arbitrator ID, chrono,', '<select name="gchoice1"><option value="Pack of Iho sticks">Pack of iho sticks</option><option value="Flas of amasec">Flask of amasec</option></select>', '<select name="gchoice2"><option value="Chain coat">Chain coat</option><option value="Flack vest">Flak vest</option><option value="Mesh vest">Mesh vest</option></select>']
                   ],
                   [
                       ['Assassin'],
                       ['Speak Language (Low Gothic) (Int), Awareness (Per), Dodge (Ag)'],
                       ['Melee Weapons Training (Primitive), Basic Weapons Training (SP), Pistol Training (SP)', '<select name="gchoice1"><option value="Ambidexterous">Ambidexterous</option><option value="Unremarkable">Unremarkable</option></select>', '<select name="gchoice2"><option value="Thrown weapons training">thrown weapons training</option><option value="Pistol training (Las)">Pistol training (Las)</option></select>'],
                       ['Sword, knife, 3 doses of stimm, charge (corpse hair), black bodyglove (Common Quality Clothing)', '<select name="gchoice1"><option value="Shotgun and 12 shells">autogun and 1 clip</option><option value="Hunting rifle and 16 rounds">Hunting rifle and 16 rounds</option><option value="autogun and 1 clip">autogun and 1 clip</option></select>',
                       '<select name="gchoice2"><option value="compact las pistol and 1 charge pack">compact las pistol and 1 charge pack</option><option value="10 throwing knives">10 throwing knives</option></select>']
                   ]
                ];

console.log('test')

document.getElementById("career-dropdown").addEventListener("change", function career_select() {
    var g = this.options[this.selectedIndex].text;
    var input = career_data(careers, g);
    career_display(input);
});

document.getElementById("randomcareer").addEventListener("click", function career_select() {
    array_length = careers.length;
    var randomnumber = Math.floor(Math.random() * (array_length - 0)) + 0;
    career_display(randomnumber);
});

function career_data (careers, g) {
    for(var i = 0; i <careers.length; i++) {
        var potentialmatch = careers[i][0]
        if (potentialmatch == g) {
            var match_data = i;
        }
    }
    return match_data
}

function career_display(data) {
    var skill = careers[data][1];
    var item = careers[data][2];
    var gear = careers[data][3];
    document.getElementById("career-skills").innerHTML = "Skills: " + skill;
    document.getElementById("career-talents").innerHTML = "Talents: " + item;
    document.getElementById("career-gear").innerHTML = "Gear: " + gear;
}


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
    homeworldtraits(input);
    base(input);
});

function random() {
    var world = worlds[Math.floor(Math.random() * worlds.length)];
    return world;
}

function base(world) {
    var world = worlds[Math.floor(Math.random() * worlds.length)];
    homeworldtraits(world);
    var table = document.getElementById("mytable");
    document.getElementById("world-dropdown").innerHTML='<option value="1">' + world[0] + '</option>';
    populate_dropdown(worlds, 'world-dropdown')
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
    total();
}

function homeworldtraits(world) {
    document.getElementById("traits").innerHTML = "Homeworld Traits: "+ world[15];
    document.getElementById("skills").innerHTML = "Homeworld Skills: "+ world[16];
    document.getElementById("talents").innerHTML = "Homeworld Talents: "+ world[17];
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

function populate_dropdown(array, element) {
    var select = document.getElementById(element);
    for(var i = 0; i < array.length; i++) {
        var option = array[i][0];
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
              /*var c = document.getElementById("wstotalcell").childNodes;
              c[0].innerHTML = totalcount;*/
           }

           if (/^\d+$/.test(pointer) == true) {
               totalcount = parseInt(totalcount + pointer)
           }
       }
    }
}

document.getElementById("rerollButton").addEventListener("click", rollStats);
document.getElementById("rerollButton").addEventListener("click", total);
window.onload = populate_dropdown(worlds, 'world-dropdown');
window.onload = populate_dropdown(careers, 'career-dropdown');
