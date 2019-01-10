class Board {
  constructor() {
    board = new Board();
    players = this.createPlayers(); 
    this.ready = false;
  }


  /**
   Returns active player
  */

 get activePlayer(){
  return this.players.find(player => players.active);
}


  /* Creates two player objectS
  */

  createPlayers() {
    const players = [
      new Player("Player 1", 1, "#e15258", true),
      new Player("Player 2", 2, "#e59a13")
    ];
    return players;
  }



  /**  
   * Gets game ready for play 
  */
 startGame();

}
