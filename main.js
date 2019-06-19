import Elem from "./collision.js";

const canvas = document.getElementById("game"),
  ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 500;

class Item1 extends Elem {
  x = 10;
  y = 10;
  w = 100;
  h = 100;
  vx = 3;
  vy = 3;
  color = "red";
  move = {
    right: false,
    down: false,
    left: false,
    up: false
  };

  draw(ctx, items) {
    super.draw(ctx);

    if (this.move.up) this.y -= this.vy;
    if (this.move.down) this.y += this.vy;
    if (this.move.right) this.x += this.vx;
    if (this.move.left) this.x -= this.vx;

    items.forEach(v => this.hit(v));
  }
  hit(p) {
    if (this.collide(p)) {
      console.log("hit");
    }
  }

  isMoving(dir) {
    this.move[dir] = true;
  }
  stopMoving(dir) {
    this.move[dir] = false;
  }
}

class Item2 extends Elem {
  x = 100;
  y = 100;
  w = 10;
  h = 10;
  color = "yellow";
}

const items = [new Item1(), new Item2()];

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  items.forEach(v => v.draw(ctx, items.filter(l => l !== v)));
  requestAnimationFrame(draw);
}
draw();

document.onkeydown = e => {
  if (e.keyCode === 68) items[0].isMoving("right");
  if (e.keyCode === 83) items[0].isMoving("down");
  if (e.keyCode === 65) items[0].isMoving("left");
  if (e.keyCode === 87) items[0].isMoving("up");
};

document.onkeyup = e => {
  if (e.keyCode === 68) items[0].stopMoving("right");
  if (e.keyCode === 83) items[0].stopMoving("down");
  if (e.keyCode === 65) items[0].stopMoving("left");
  if (e.keyCode === 87) items[0].stopMoving("up");
};
