var cnv;
var step = 25

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(500, 500);
  centerCanvas();
  noLoop()
}

function windowResized() {
  centerCanvas();
}

function draw() {      
    background(255);
    for(let x = 0; x<500; x+=step){
        for(let y = 0; y <500; y+=step){
            chanceIt(x, y, x+step, y+step)
        }
    }
}

function chanceIt(x, y, w, z) {
    let cool = random() >= 0.5;
    if(cool){
        line(w,y,x,z)
    }else{
        line(x,y,w,z)
    }
}
