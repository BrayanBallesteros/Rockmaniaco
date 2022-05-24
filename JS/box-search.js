

bars_search =       document.getElementById("ctn-bars-search");
inputSearch =       document.getElementById("search");
box_search =        document.getElementById("box-search");

document.getElementById("search").addEventListener("keyup", buscador_interno);
function buscador_interno(){
filter = inputSearch.value.toUpperCase();
    li = box_search.getElementsByTagName("li");
for (i = 0; i < li.length; i++){ 
a = li[i].getElementsByTagName("a")[0];
textValue = a.textContent || a.innerText;
if(textValue.toUpperCase().indexOf(filter) > -1){
li[i].style.display = "";
box_search.style.display = "block";
if (inputSearch.value === " "){
box_search.style.display = "none";
}
}else{
li[i].style.display = "none";
        }
    }
}

