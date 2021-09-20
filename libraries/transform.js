var xoff1 = 0; 
var xoff2 = 10000; 

function setup() {
    createCanvas(600, 600);
    background(0);
}

function draw() {
    smooth();
    background(0,0,0);
    stroke('yellow'); 
    fill(random(255), random(255), random(255)); 
    // var x = random(width); 

    xoff1 += 0.005;
    xoff2 += 0.005;
        
    var x = map(noise(xoff2), 0, 1, 0, width);
    var y = map(noise(xoff1), 0, 1, 0, height);

    

    ellipse(x,y,random(7,21),random(7,21));
    
    /*
    // let v = createVector(random(-100, 100), random(-100, 100)); 
    v = p5.Vector.random2D();
    v.mult(random(50, 100));
    
    strokeWeight(1);
       
    for (var i = 0; i < 100; i++) {
        for (var i = 0; i < 100; i++) {
            for (var i = 0; i < 100; i++) {
                stroke(255,0,random(0, 255), 50);
                line(0, 0, v.x, v.y);
                circle(v.x, v.y, random(0, 100), random(0, 100));
            }
            stroke(random(0, 255), 0, 255, 50);
            line(0, 0, v.x, v.y);
            circle(v.x, v.y, noise(10), noise(0, 100));
        }
        stroke(255, random(0, 255), 255, 50);
        line(0, 0, v.x, v.y);
        circle(v.x, v.y, random(0, 100), random(0, 100));
    } 
    */
    
}