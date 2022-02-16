document.addEventListener("DOMContentLoaded", ()=>{})


let inputNumber = document.getElementById("number");
let submit = document.getElementById("submit")
let mydiv = document.getElementsByClassName("container")[0]

submit.addEventListener("click",()=>{
    mydiv.innerHTML =""
    let numbers = inputNumber.value;
    for(let i=0;i<numbers;i++){
        
        let item = document.createElement("p")
        item.classList.add("container__list")
        item.innerHTML = lotteryNumber(numbers)
        
        let line = document.createElement("hr")
        item.appendChild(line)

        let conteiner = document.getElementsByClassName("container")[0];
        conteiner.appendChild(item)

        conteiner.insertBefore(item, conteiner.childNodes[0])
        
    }
    inputNumber.value = "";
    
}) 


function randomArray(){
    let myArray = [];
    while(myArray.length<6){
        let random = ((Math.floor(Math.random() * 90) + 1)+"");
    
        if(!myArray.includes(random)){
            myArray.push(random)
        }
}
myArray.sort(function(a, b){return a-b})
return myArray    
}

/* function lotteryNumber(){
    let strNumber = randomArray().join("-")
    let joker = (Math.floor(Math.random() * 90) + 1)
    if(!strNumber.includes(joker)){
        strNumber += "|" + joker + "|" +  (Math.floor(Math.random() * 90) + 1);
    }
    return strNumber;
} */

function lotteryNumber(){
    let newArray = randomArray()
    
    let strNumber = randomArray().join("-")
    while(newArray.length<7){
        let joker = ((Math.floor(Math.random() * 90) + 1)+"");
        if(!newArray.includes(joker)){
            newArray.push(joker)
        }
    } 
    strNumber += "|" + newArray[6] + "|" +  (Math.floor(Math.random() * 90) + 1);
    return strNumber;
}
console.log(lotteryNumber());