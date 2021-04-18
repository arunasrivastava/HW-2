let storeWords =[];
//to make sections like the buttons only visible at certain stages
document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("changeList").style.visibility = "hidden";
    document.getElementById("changedList").style.display = "none";
    document.getElementById("start").addEventListener("click", getUserWords, false);
    document.getElementById("changeList").addEventListener("click", changeWords, false);
      
    
});
//Now get users inputted words and store in array
function getUserWords(){
    for(let i =0; i < 3; i++){
        //for each run, a nw word is stores at a new position in the array
        storeWords[i] =(prompt("enter a word"));
        //begin adding to list 
        let liPoint = document.createElement("li");
        //This list points to liPoint which points to the word at position i in array
        liPoint.appendChild(document.createTextNode(storeWords[i]));
        document.getElementById("oldList").appendChild(liPoint);
    }
    document.getElementById("changeList").style.visibility = "visible";
    document.getElementById("start").style.visibility = "hidden";
}
//This last function will rearrange each word in the list 
function changeWords(){
    document.getElementById("getList").style.display = "none";
    document.getElementById("changedList").style.display = "block";

    let storeNewWords = storeWords.map(function(oneWord){
        return oneWord.charAt(oneWord.length - 1) + oneWord.substring(1, oneWord.length - 1) + oneWord.charAt(0);
    });
     
    for (let i = 0; i < 3; i++){
        let liPoint = document.createElement("li");
        //This list points to liPoint which points to the word at position i in array
        liPoint.appendChild(document.createTextNode(storeNewWords[i]));
        document.getElementById("newList").appendChild(liPoint);
        
    }
}