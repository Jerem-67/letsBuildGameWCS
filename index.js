const canvas = document.querySelector("#game-container");
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

class Entity{
    constructor(x, y , radius) {
        this.x = x;
        this.y = y;
        this.raidus = radius;
        this.color = "red";
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.raidus, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

class Player extends Entity{
    constructor(x, y, radius, color) {
        super(x, y, radius);
        this.color = color;
    }
}

const player = new Player(canvas.width / 2, canvas.height / 2, 10, "red");
player.draw();