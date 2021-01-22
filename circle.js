class Circle{

    constructor(x,y){
        //constructor
        this.x = x
        this.y = y
        this.r = 5
        this.growing = true
        this.rc = random(255)
        this.gc = random(255)
        this.bc = random(255)
    }

    grow(){
        if(this.growing)this.r+=0.5
    }

    edges(){
        return (this.x+this.r>= width || this.x - this.r <= 0 || this.y + this.r >= height || this.y - this.r <= 0)
    }

    show(){
        // if(this.edges())this.growing = false
        push()
        // noFill()
       
        fill(this.rc,this.gc,this.bc,200)
        stroke(220)
        strokeWeight(2)
        circle(this.x, this.y, 2*this.r)
        pop()
    }
}