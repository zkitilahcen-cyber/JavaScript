var fruits = ['Mangue','Raisin','Figue','Kiwi'];
document.getElementById("demo").innerHTML=fruits;
var fruits = ['Mangue','Raisin','Kiwi','Figue'];

function isExist() {
    var fruitAchter = document.getElementById("fruit").value;
    var index = fruits.indexOf(fruitAchter);
    if (fruitAchter=='Mangue'||fruitAchter=='Raisin'||fruitAchter=='Figue'||fruitAchter=='Kiwi' && index > -1){
        fruits.splice(index, 1);
        alert("Ok!");
        document.getElementById("filter").innerHTML=fruits;
    }
    else {
        alert("indisponible");
    }

    

}
