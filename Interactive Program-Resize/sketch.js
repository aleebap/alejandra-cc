let btn1;
let btn2;
let btn3;
let btn4;

let currentScore = 0;
let currentScoreDiv;
let divContainer;
let scoreText;

let yellow = '#c9c783';
let blue = '#8fbed9';
let purple = '#c1a3f7';
let green = '#83c99a';
function setup() {   
   createCanvas(windowWidth-50, windowHeight-50);
    
    btn1 = createButton('yellow');
    btn2 = createButton('blue');
    btn3 = createButton('purple');
    btn4 = createButton('green');

    btn1.class('btnClass');
    btn1.id('btn1ID');
    
    btn2.class('btnClass');
    btn2.id('btn2ID');

    btn3.class('btnClass');
    btn3.id('btn3ID');

    btn4.class('btnClass');
    btn4.id('btn4ID');


 scoreText = text(currentScore, windowWidth/2, windowHeight/2);

   currentScoreDiv = createDiv();
   currentScoreDiv.id('scoreId');
   currentScoreDiv.child(scoreText);
    
    divContainer = createDiv();
    divContainer.id('container1');
  
    divContainer.child(btn1);
    divContainer.child(btn2);
    divContainer.child(btn3);
    divContainer.child(btn4);

      btn1.mousePressed(changeNumberColor1);
      btn2.mousePressed(changeNumberColor2);
      btn3.mousePressed(changeNumberColor3);
      btn4.mousePressed(changeNumberColor4);


}

function draw() {
  background('#c7867d');
   drawCurrentScore();

}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
          divContainer.position(width/2, height/4);

}

function changeNumberColor1(){
    fill(yellow);
    currentScore ++;
}
function changeNumberColor2(){
    fill(blue);
    currentScore ++;
}
function changeNumberColor3(){
    fill(purple);
    currentScore ++;
}
function changeNumberColor4(){
    fill(green);
    currentScore ++;
}

function drawCurrentScore(){
    stroke(3);
    strokeWeight(4);
    
    textAlign(CENTER);
    if(windowWidth <= 800){
         textSize(70);
    } else {
        textSize(100);
    }
    if((windowWidth <=500) && (windowHeight <=500)) {
    text(currentScore, windowWidth/2, windowHeight/2 + 50)
    } else{
     text(currentScore, windowWidth/2, windowHeight/2 + 100)
    }
}
