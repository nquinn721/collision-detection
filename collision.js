class Elem {
  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color || "black";
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
  collide(p) {
    if (
      (this.x >= p.x &&
        this.x <= p.x + p.w &&
        this.y >= p.y &&
        this.y <= p.y + p.h) ||
      (this.x + this.w >= p.x &&
        this.x + this.w <= p.x + p.w &&
        this.y >= p.y &&
        this.y <= p.y + p.h) ||
      (this.x >= p.x &&
        this.x <= p.x + p.w &&
        this.y + this.h >= p.y &&
        this.y + this.h <= p.y + p.h) ||
      (this.x + this.w >= p.x &&
        this.x + this.w <= p.x + p.w &&
        this.y + this.h >= p.y &&
        this.y + this.h <= p.y + p.h) ||
      (p.x >= this.x &&
        p.x <= this.x + this.w &&
        p.y >= this.y &&
        p.y <= this.y + this.h) ||
      (p.x + p.w >= this.x &&
        p.x + p.w <= this.x + this.w &&
        p.y >= this.y &&
        p.y <= this.y + this.h) ||
      (p.x >= this.x &&
        p.x <= this.x + this.w &&
        p.y + p.h >= this.y &&
        p.y + p.h <= this.y + this.h) ||
      (p.x + p.w >= this.x &&
        p.x + p.w <= this.x + this.w &&
        p.y + p.h >= this.y &&
        p.y + p.h <= this.y + this.h)
    )
      return true;
  }
}

export default Elem;
