let angle = 0;
let radius = 270; 
let aVel = 0.02;
let aAcc = 0.001;


function setup(){
    createCanvas(600, 600);
    background(0, [10]); 
}
function draw() {
    background(0);  smooth();
    drawPendulum();
    push(); 
    strokeWeight(10);
    stroke('yellow');
    noFill();
    pop(); 
}
function drawPendulum() {
    
    let x = cos(angle) * radius;
    let y = sin(angle) * radius;
       
    noFill();
    
    translate(width / 2, height / 2);
    
    stroke('purple');
    fill('yellow');
    circle(0, 0, 10);  // inner circle center of thecanvas. hard coded
    noFill();
    stroke('purple');
    circle(0, 0, 500); // outer circle hadr coded.    
    
    push(); 
    let rectAngle = angle;
    
    stroke("white");
    rotate(rectAngle += aVel -1);
    
    
    rect(x, y, 50, 50);
    pop(); 
    push();
    
    
    // pendulum
    stroke('lightblue');
    strokeWeight(3);
    line(0, 0, x, y);
    
    strokeWeight(35);
    stroke('purple');
    point(x+random(0,3 ), y+random(0, 3));
    
    stroke('lightblue');
    strokeWeight(5); 
    circle(0, 0, x, y);
    circle(x+random(0,4),y+random(0,4),35);
    
    // apply angular velocity to the pendulum 
    angle += aVel;
    
    aVel += aAcc;
    aVel = constrain(aVel, 0, 0.009);
    pop(); 
}   