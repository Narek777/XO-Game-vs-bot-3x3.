 var xoMatrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ];

var e = 1000;
function step1() {
    xoMatrix[0][0]=0;
    e = 1;
    editing();
    pcstep();

}
function step2() {
    xoMatrix[0][1]=0;
    e = 2;
    editing();
    pcstep();
}
function step3() {
    xoMatrix[0][2]=0;
    e = 3;
    editing();
    pcstep();
}
function step4() {
    xoMatrix[1][0]=0;
    e = 4;
    editing();
    pcstep();
}
function step5() {
    xoMatrix[1][1]=0;
    e = 5;
    editing();
    pcstep();
}
function step6() {
    xoMatrix[1][2]=0;
    e = 6;
    editing();
    pcstep();
}
function step7() {
    xoMatrix[2][0]=0;
    e = 7;
    editing();
    pcstep();
}
function step8() {
    xoMatrix[2][1]=0;
    e = 8;
    editing();
    pcstep();
}
function step9() {
    xoMatrix[2][2]=0;
    e = 9;
    editing();
    pcstep();
}

function editing(){
    document.getElementById("step" + e).classList.add("x");
    document.getElementById("step" + e).disabled = true;
    document.getElementById("step" + e).removeAttribute("onclick");
    document.getElementById("step" + e).innerHTML = 0;
}



 pcstep = function () {


            var random = Math.ceil(Math.random() * 9);

            let edit = document.getElementById("step" + random);

            if (edit.hasAttribute("onclick")) {
                edit.classList.add("o");
                edit.disabled = true;
                edit.removeAttribute("onclick");
                edit.innerHTML = 100;
                switch (random) {
                    case 1:
                        xoMatrix[0][0] = 10;
                        break;
                    case 2:
                        xoMatrix[0][1] = 10;
                        break;
                    case 3:
                        xoMatrix[0][2] = 10;
                        break;
                    case 4:
                        xoMatrix[1][0] = 10;
                        break;
                    case 5:
                        xoMatrix[1][1] = 10;
                        break;
                    case 6:
                        xoMatrix[1][2] = 10;
                        break;
                    case 7:
                        xoMatrix[2][0] = 10;
                        break;
                    case 8:
                        xoMatrix[2][1] = 10;
                        break;
                    case 9:
                        xoMatrix[2][2] = 10;
                        break;
                }
               finish();
            }
            else {
                for (let a = 1; a < 10; a++){
                    if(document.getElementById("step"+a).innerHTML == a){
                        document.getElementById("step"+a).classList.add("o");
                        document.getElementById("step"+a).disabled = true;
                        document.getElementById("step"+a).removeAttribute("onclick");
                        document.getElementById("step"+a).innerHTML = 100;
                        switch (a) {

                            case 1:
                                xoMatrix[0][0] = 10;
                                break;
                            case 2:
                                xoMatrix[0][1] = 10;
                                break;
                            case 3:
                                xoMatrix[0][2] = 10;
                                break;
                            case 4:
                                xoMatrix[1][0] = 10;
                                break;
                            case 5:
                                xoMatrix[1][1] = 10;
                                break;
                            case 6:
                                xoMatrix[1][2] = 10;
                                break;
                            case 7:
                                xoMatrix[2][0] = 10;
                                break;
                            case 8:
                                xoMatrix[2][1] = 10;
                                break;
                            case 9:
                                xoMatrix[2][2] = 10;
                                break;
                        }
                        finish();
                        break;
                    }
                    finish();
                }
        }
    };



function finish(){
    if(xoMatrix[0][0] === 0 && xoMatrix[0][1] === 0 && xoMatrix[0][2] === 0){
        line4.setAttribute('class','winnerline111');
        document.getElementById("win").classList.remove("congratulation");
    }
    else if(xoMatrix[1][0] === 0 && xoMatrix[1][1] === 0 && xoMatrix[1][2] === 0){
        line5.setAttribute('class','winnerline111');
        document.getElementById("win").classList.remove("congratulation");
    }
    else if(xoMatrix[2][0] === 0 && xoMatrix[2][1] === 0 && xoMatrix[2][2] === 0){
        line6.setAttribute('class','winnerline111');
        document.getElementById("win").classList.remove("congratulation");
    }
    else if(xoMatrix[0][0] === 0 && xoMatrix[1][0] === 0 && xoMatrix[2][0] === 0){
        line1.setAttribute('class','winnerline000');
        document.getElementById("win").classList.remove("congratulation");
    }
    else if(xoMatrix[0][1] === 0 && xoMatrix[1][1] === 0 && xoMatrix[2][1] === 0){
        line2.setAttribute('class','winnerline000');
        document.getElementById("win").classList.remove("congratulation");
    }
    else if(xoMatrix[0][2] === 0 && xoMatrix[1][2] === 0 && xoMatrix[2][2] === 0){
        line3.setAttribute('class','winnerline000');
        document.getElementById("win").classList.remove("congratulation");
    }
    else if(xoMatrix[0][0] === 0 && xoMatrix[1][1] === 0 && xoMatrix[2][2] === 0){
        line7.setAttribute('class','winnerlinexxx');
        document.getElementById("win").classList.remove("congratulation");
    }
    else if(xoMatrix[0][2] === 0 && xoMatrix[1][1] === 0 && xoMatrix[2][0] === 0){
        line8.setAttribute('class','winnerlinexxxx');
        document.getElementById("win").classList.remove("congratulation");
    }



    else if(xoMatrix[0][0] === 10 && xoMatrix[0][1] === 10 && xoMatrix[0][2] === 10){
        line4.setAttribute('class','winnerline111');
        document.getElementById("lose").classList.remove("congratulation");
    }
    else if(xoMatrix[1][0] === 10 && xoMatrix[1][1] === 10 && xoMatrix[1][2] === 10){
        line5.setAttribute('class','winnerline111');
        document.getElementById("lose").classList.remove("congratulation");
    }
    else if(xoMatrix[2][0] === 10 && xoMatrix[2][1] === 10 && xoMatrix[2][2] === 10){
        line6.setAttribute('class','winnerline111');
        document.getElementById("lose").classList.remove("congratulation");
    }
    else if(xoMatrix[0][0] === 10 && xoMatrix[1][0] === 10 && xoMatrix[2][0] === 10){
        line1.setAttribute('class','winnerline000');
        document.getElementById("lose").classList.remove("congratulation");
    }
    else if(xoMatrix[0][1] === 10 && xoMatrix[1][1] === 10 && xoMatrix[2][1] === 10){
        line2.setAttribute('class','winnerline000');
        document.getElementById("lose").classList.remove("congratulation");
    }
    else if(xoMatrix[0][2] === 10 && xoMatrix[1][2] === 10 && xoMatrix[2][2] === 10){
        line3.setAttribute('class','winnerline000');
        document.getElementById("lose").classList.remove("congratulation");
    }
    else if(xoMatrix[0][0] === 10 && xoMatrix[1][1] === 10 && xoMatrix[2][2] === 10){
        line7.setAttribute('class','winnerlinexxx');
        document.getElementById("lose").classList.remove("congratulation");
    }
    else if(xoMatrix[0][2] === 10 && xoMatrix[1][1] === 10 && xoMatrix[2][0] === 10){
        line8.setAttribute('class','winnerlinexxxx');
        document.getElementById("lose").classList.remove("congratulation");
    }
    else {
        tietime();
    }
}


var g = 0;
    function tietime() {
        for (let a = 1; a < 10; a++) {
            if (document.getElementById("step" + a).innerHTML == 100) {
                g++;
            }
            else if (document.getElementById("step" + a).innerHTML == 0) {
                g++;
            }
        }
        if(g > 100){
            document.getElementById("tie").classList.remove("congratulation");
        }
    }








 /*function finish(){
     if(xoMatrix[0][0] === 0 && xoMatrix[0][1] === 0 && xoMatrix[0][2] === 0){
         wins[3].setAttribute('class','winnerline111');
         document.getElementById("win").classList.remove("congratulation");
     }
     else if(xoMatrix[1][0] === 0 && xoMatrix[1][1] === 0 && xoMatrix[1][2] === 0){
         wins[4].setAttribute('class','winnerline111');
         document.getElementById("win").classList.remove("congratulation");
     }
     else if(xoMatrix[2][0] === 0 && xoMatrix[2][1] === 0 && xoMatrix[2][2] === 0){
         wins[5].setAttribute('class','winnerline111');
         document.getElementById("win").classList.remove("congratulation");
     }
     else if(xoMatrix[0][0] === 0 && xoMatrix[1][0] === 0 && xoMatrix[2][0] === 0){
         document.getElementById("win").classList.remove("congratulation");
         wins[0].setAttribute('class','winnerline000');
     }
     else if(xoMatrix[0][1] === 0 && xoMatrix[1][1] === 0 && xoMatrix[2][1] === 0){
         wins[1].setAttribute('class','winnerline000');
         document.getElementById("win").classList.remove("congratulation");
     }
     else if(xoMatrix[0][2] === 0 && xoMatrix[1][2] === 0 && xoMatrix[2][2] === 0){
         wins[2].setAttribute('class','winnerline000');
         document.getElementById("win").classList.remove("congratulation");
     }
     else if(xoMatrix[0][0] === 0 && xoMatrix[1][1] === 0 && xoMatrix[2][2] === 0){
         wins[6].setAttribute('class','winnerlinexxx');
         document.getElementById("win").classList.remove("congratulation");
     }
     else if(xoMatrix[0][2] === 0 && xoMatrix[1][1] === 0 && xoMatrix[2][0] === 0){
         wins[7].setAttribute('class','winnerlinexxxx');
         document.getElementById("win").classList.remove("congratulation");
     }



     else if(xoMatrix[0][0] === 10 && xoMatrix[0][1] === 10 && xoMatrix[0][2] === 10){
         wins[3].setAttribute('class','winnerline111');
         document.getElementById("lose").classList.remove("congratulation");
     }
     else if(xoMatrix[1][0] === 10 && xoMatrix[1][1] === 10 && xoMatrix[1][2] === 10){
         wins[4].setAttribute('class','winnerline111');
         document.getElementById("lose").classList.remove("congratulation");
     }
     else if(xoMatrix[2][0] === 10 && xoMatrix[2][1] === 10 && xoMatrix[2][2] === 10){
         wins[5].setAttribute('class','winnerline111');
         document.getElementById("lose").classList.remove("congratulation");
     }
     else if(xoMatrix[0][0] === 10 && xoMatrix[1][0] === 10 && xoMatrix[2][0] === 10){
         wins[0].setAttribute('class','winnerline000');
         document.getElementById("lose").classList.remove("congratulation");
     }
     else if(xoMatrix[0][1] === 10 && xoMatrix[1][1] === 10 && xoMatrix[2][1] === 10){
         wins[1].setAttribute('class','winnerline000');
         document.getElementById("lose").classList.remove("congratulation");
     }
     else if(xoMatrix[0][2] === 10 && xoMatrix[1][2] === 10 && xoMatrix[2][2] === 10){
         wins[2].setAttribute('class','winnerline000');
         document.getElementById("lose").classList.remove("congratulation");
     }
     else if(xoMatrix[0][0] === 10 && xoMatrix[1][1] === 10 && xoMatrix[2][2] === 10){
         wins[6].setAttribute('class','winnerlinexxx');
         document.getElementById("lose").classList.remove("congratulation");
     }
     else if(xoMatrix[0][2] === 10 && xoMatrix[1][1] === 10 && xoMatrix[2][0] === 10){
         wins[7].setAttribute('class','winnerlinexxxx');
         document.getElementById("lose").classList.remove("congratulation");
     }
     else {
         tietime();
     }
 }
*/