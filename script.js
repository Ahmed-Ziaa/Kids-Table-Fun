function result (){
    let tablenum = document.getElementById("tablenum").value
    let range = document.getElementById("range").value

    let empty = ""
    for(i=1; i<=range; i++){
        empty += tablenum + " x " + i + "=" + tablenum + i + "<br>"
        document.getElementById("displaydata").innerHTML = empty
    }
}

function reaload(){
    window.location.reaload()
} 