class Space {
  constructor(x, y, id, token) {
    this.x = x;
    this.y = y;
    this.id = `space-${x}-${y}`;
    this.token = null;
    this.diameter = 76;
    this.radius = this.diameter / 2;
  } //#endregion

  /* getter methods */ 
  
  get owner() {
    if (this.token === null) {
      return null;
    } else {
      return this.token.owner;
    }
  }

  /** Draw SVG space */
  drawSVGSpace() {
    const svgSpace = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    svgSpace.setAttributeNS(null, "id", this.id);
    svgSpace.setAttributeNS(null, "cx", this.x * this.diameter + this.radius);
    svgSpace.setAttributeNS(null, "cy", this.y * this.diameter + this.radius);
    svgSpace.setAttributeNS(null, "r", this.radius - 8);
    svgSpace.setAttributeNS(null, "fill", "black");
    svgSpace.setAttributeNS(null, "stroke", "none");
    document.getElementById("mask").appendChild(svgSpace);
  }

  /** Updates space to reflect a token has been dropped there
   object = the token dropped. 
   */

  mark(token) {
    this.token = token;
  }
}
