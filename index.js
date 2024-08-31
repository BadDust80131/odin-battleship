class Ship {
  constructor(shipLength, timesHit, isSunk, xCor, yCor, board, shipID) {
    this.shipLength = shipLength;
    this.timesHit = timesHit;
    this.isSunk = isSunk;
    this.xCor = xCor;
    this.yCor = yCor;
    this.board = board;
    this.shipID = shipID;
    this.spawn();
  }

  spawn() {
    for (let i = 0; i < this.shipLength; i++) {
      this.board[this.yCor][this.xCor + i] = this.shipID;
    }
  }

  hit() {
    this.timesHit += 1;
  }

  checkIsSunk() {
    if (timesHit >= shipLength) {
      this.isSunk = true;
    }
  }
}

class Gameboard {
  constructor() {
    this.missedShots = [];
    this.hitShots = [];
    this.board = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    this.ship1 = new Ship(4, 0, false, 2, 4, this.board, 1);
    this.ship2 = new Ship(3, 0, false, 6, 7, this.board, 2);
    this.ship3 = new Ship(2, 0, false, 4, 1, this.board, 3);
    this.ship4 = new Ship(3, 0, false, 5, 5, this.board, 4);
    console.log(this.board);
  }

  recieveAttack(xCor, yCor) {
    if (this.board[yCor][xCor] == 0) {
      this.missedShots.push([xCor, yCor]);
    } else if (this.board[yCor][xCor] == 1) {
      this.hitShots.push([xCor, yCor]);
      this.ship1.hit();
    } else if (this.board[yCor][xCor] == 2) {
      this.hitShots.push([xCor, yCor]);
      this.ship2.hit();
    } else if (this.board[yCor][xCor] == 3) {
      this.hitShots.push([xCor, yCor]);
      this.ship3.hit();
    } else if (this.board[yCor][xCor] == 4) {
      this.hitShots.push([xCor, yCor]);
      this.ship4.hit();
    }
  }

  areAllSunk() {
    if (
      this.ship1.isSunk &&
      this.ship2.isSunk &&
      this.ship3.isSunk &&
      this.ship4.isSunk
    ) {
      return true;
    } else {
      return false;
    }
  }
}

class Player {
  constructor() {
    this.board = new Gameboard();
  }
}
