class Token {
  constructor(index, owner) {
    this.owner = owner;
    this.id = `token-${index}-${owner.id}`;
    this.dropped = false;
    this.columnLocation = 0;
  }

  /* 
    Get associated htmlToken 
    Returns element
    */

  /* Getter methods */

  get htmlToken() {
    return document.getElementById(this.id);
  }

  get offsetLeft() {
    return this.htmlToken.offsetLeft;
  }

  /* Other methods */

  drawHTMLToken() {
    const div = document.createElement("div");
    document.getElementById("game-board-underlay").appendChild(div);
    div.setAttribute("id", this.id);
    div.setAttribute("class", "token");
    div.style.backgroundColor = this.owner.color;
  }

  moveLeft() {
    if (this.columnLocation > 0) {
      this.htmlToken.style.left = this.offsetLeft - 76;
      this.columnLocation -= 1;
    }
  }

  moveRight(columns) {
    if (this.columnLocation < columns - 1) {
      this.htmlToken.style.left = this.offsetLeft + 76;
      this.columnLocation += 1;
    }
  }

  drop(target, reset) {
    this.dropped = true;

    $(this.htmlToken).animate(
      {
        top: target.y * target.diameter
      },
      750,
      "easeOutBounce",
      reset
    );
  }
}
