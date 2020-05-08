var fruits = ['Mangue','Raisin','Figue','Kiwi'];
document.getElementById("demo").innerHTML=fruits;
var fruits = ['Mangue','Raisin','Kiwi','Figue'];

function isExist() {
    var fruitAchter = document.getElementById("fruit").value;
    var achat = false;
    for (index = 0 ; index < fruits.length; index++ ){
    
        if (fruitAchter.toUpperCase() == fruits[index].toUpperCase()){
            
            fruits.splice(index, 1);
            
            achat=true;
        }
    }

    if (achat==true){
        alert("Ok!");

    }else {
        alert("Indisponible");
    }

    document.getElementById("demo").innerHTML=fruits;
    

}
