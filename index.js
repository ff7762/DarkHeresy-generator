document.getElementById("rerollButton").addEventListener("click", rollStats);

function rollStats() {
    var d10 = document.getElementsByClassName('demo');
    for (var i = 0; i < d10.length; ++i) {
        var result = Math.floor(Math.random()*10) + 1;
        var item = d10[i];
        item.innerHTML = result;
    }
}
