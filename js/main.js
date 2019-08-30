let verif = true;

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
    document.querySelector('#screenNum').innerHTML = eval(document.querySelector('#screenNum').innerHTML);
}