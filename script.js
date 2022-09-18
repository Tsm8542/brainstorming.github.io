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
}
function p(){
    window.print();
}