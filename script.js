function s(){
    var x = document.getElementById("tt").value;
    var file = new Blob([x],{type:"text"});
    var a = document.createElement("a");
    a.href = URL.createObjectURL(file);
    a.download = "Project.txt";
    a.click()
}

function l(){
    var file = document.getElementById("load").files[0];
    var reader = new FileReader();
    reader.onloadend = function(){
        var load = (reader.result);
        document.getElementById("tt").value = load;
    }
    reader.readAsText(file);
    let x = document.querySelector("#pt");
    x.innerText = document.getElementById("tt").value;
}
function p(){
    window.print();
}

function x(){
    var ajkld = document.querySelector("#tt").value;
    localStorage.setItem('skjl',ajkld);
    let x = document.querySelector("#pt");
    x.innerText = document.getElementById("tt").value;
}
function m(){
    if(localStorage.skjl!=undefined)
    document.querySelector("#tt").innerHTML = localStorage.skjl;
}
