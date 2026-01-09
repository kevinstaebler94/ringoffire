export class Game {
  public players: string[] = ["Kevin", "Michelle", "Daniel", "Oli"];
  public stack: string[] = [];
  public playedCards: string[] = [];
  public currentPlayer: number = 0;

  constructor() {
    for (let i = 1; i < 14; i++) {
      this.stack.push("ace_" + i);
      this.stack.push("clubs_" + i);
      this.stack.push("diamonds_" + i);
      this.stack.push("hearts_" + i);
    }
    shuffle(this.stack);
  }
}

function shuffle(array: string[]): void {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}
