//I am making circle packing
//followed Coding Train

var circles = []
var attempt = 0

function setup(){
    createCanvas(windowWidth, windowHeight)
    // frameRate(5)
   
}



function draw(){
    background(30, 30, 30)
    var newC = newCircle()
    if(newC!=null){
        circles.push(newC)
    }
    else{
        attempt++;
    }

    if(attempt>1000){
        noLoop();
        print("Finished!")
    }

    circles.forEach((c)=>{
        if(c.growing){
            if(c.edges())
                c.growing = false
            circles.forEach((other)=>{
                if(c!=other){
                    let d = dist(c.x, c.y, other.x, other.y)
                    if(d<=c.r+other.r+2)
                        c.growing = false
                }
            })
        }
    })
    circles.forEach(function(c){
        c.show()
        c.grow()
    })
}

function newCircle(){

    let x = random(width)
    let y = random(height)
    let valid = true
    circles.forEach(function(c){
        if(dist(x,y,c.x,c.y)<c.r+6)
        {
            valid = false
            // break;
        }
    })

    if(valid) return new Circle(x,y)
    return null
}
