var xoff1 = 0; 
var xoff2 = 10000; 

function setup() {
    createCanvas(600, 600);
    background(0, 0, 0);
}

function draw() {
    smooth();
    background(0);
    stroke('yellow'); 
    fill(random(255), random(255), random(255)); 
    // var x = random(width); 

    xoff1 += 0.005;
    xoff2 += 0.005;
        
    var x = map(noise(xoff2), 0, 1, 0, width);
    var y = map(noise(xoff1), 0, 1, 0, height);

    

    ellipse(x,y,random(7,21),random(7,21));
    
    
    
}
