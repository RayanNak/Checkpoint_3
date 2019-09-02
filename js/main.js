let verif = true;
let historyOperation = [];
let historyValue = [];
let historyElement = document.querySelector('#history');
let historyParagraph = document.querySelector('#historyParagraph');
let historyIndex = 0;
let firstInputValue = document.querySelector('#GlobalInput').value;
let secondInputValue = document.querySelector('#DigitInput').value;

function check(button_id){
    
    let myArrayNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let operations = ['+', '-', '*', '/', '='];

    i = 0;
    while(i<=9){
        if(button_id==myArrayNum[i]){
            document.querySelector('#screenNum').innerHTML += button_id;
            verif=true;
        }
        i++;
    }

    if(button_id=="plus" && verif){
        document.querySelector('#screenNum').innerHTML += "+";
        verif=false;
    }
    else if(button_id=="over" && verif){
        document.querySelector('#screenNum').innerHTML += "/";
        verif=false;
    }
    else if(button_id=="minus" && verif){
        document.querySelector('#screenNum').innerHTML += "-";
        verif=false;
    }
    else if(button_id=="times" && verif){
        document.querySelector('#screenNum').innerHTML += "*";
        verif=false;
    }
    else if(button_id=="reset"){
        document.querySelector('#screenNum').innerHTML = "";
        verif=false;
    }

    a = 0;
    while(a<=4){
        if(document.querySelector('#screenNum').innerHTML == operations[a]){
            document.querySelector('#screenNum').innerHTML = "";
        }
        a++;
    }
}




function calculate(){
    historyOperation.push(document.querySelector('#screenNum').innerHTML);
    historyValue.push(eval(document.querySelector('#screenNum').innerHTML));
    document.querySelector('#screenNum').innerHTML = eval(document.querySelector('#screenNum').innerHTML);
    historyParagraph.innerHTML += historyOperation[historyIndex]+"="+historyValue[historyIndex];
    historyIndex++;
    let mybr = document.createElement('br');
    historyParagraph.appendChild(mybr);
}

function getHistory(){
    if(historyElement.style.opacity==0){
        historyElement.style.opacity = 1;
    }
    else{
        historyElement.style.opacity = 0;
    }
}

// function chosen1(elementId){
//     let colorelement  = document.querySelector('#'+elementId);
//     let colorArray = ['red', 'orange', 'blue', 'blueviolet', 'darkgreen', 'lightgreen'];

//     for(let colorIndex = 0;colorIndex<=5;colorIndex++){
//         let others = document.querySelector('#'+colorArray[colorIndex]+'1');
//         console.log(others.style.outlineWidth);
//         if(others.style.outlineWidth==0){
//             colorelement.style.outlineWidth = "10px";
//         }
//     }

//     if(colorelement.style.outlineWidth!=0){
//         colorelement.style.outlineWidth = 0;
//     }
// }

function chosen(elementId, index){
    let colorelement  = document.querySelector('#'+elementId);

    let redColor = document.querySelector('#red'+index).style.outlineWidth;
    let orangeColor = document.querySelector("#orange"+index).style.outlineWidth;
    let blueColor = document.querySelector('#blue'+index).style.outlineWidth;
    let blueviolet = document.querySelector('#blueviolet'+index).style.outlineWidth;
    let darkgreen = document.querySelector('#darkgreen'+index).style.outlineWidth;
    let lightgreen = document.querySelector('#lightgreen'+index).style.outlineWidth;

    if(redColor==0 && orangeColor==0 && blueColor==0 && blueviolet==0 && darkgreen==0 && lightgreen==0){
        colorelement.style.outlineWidth = "10px";
    }
    // if(colorelement.style.outlineWidth!=0){
    //     colorelement.style.outlineWidth = 0;
    // }

    if(index=="1"){
        firstColor = colorelement.className.split(" ")[1];
        return firstColor;
    }
    if(index=="2"){
        secondColor = colorelement.className.split(" ")[1];
        return secondColor;
    }
    if(index=="3"){
        thirdColor = colorelement.className.split(" ")[1];
        return thirdColor;
    }
    if(index=="4"){
        forthColor = colorelement.className.split(" ")[1];
        return forthColor;
    }
}



function ChangeGlobalColor(){
    let bodyBackground = document.querySelector('body');
    bodyBackground.style.backgroundImage = `linear-gradient(${firstInputValue}deg, ${firstColor}, ${secondColor})`;


}

function ChangeDigitColor(){
    let buttonBackground = document.getElementsByTagName('button');
    let i;
    console.log(buttonBackground.length);
    for(classNameIndex=0; classNameIndex < buttonBackground.length ; classNameIndex++){
        buttonBackground[classNameIndex].style.backgroundImage = `linear-gradient(${secondInputValue}deg, ${thirdColor}, ${forthColor})`;
    }

    
}


