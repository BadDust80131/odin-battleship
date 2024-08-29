class Ship {
  constructor(shipLength, timesHit, isSunk) {
    let shipLength = shipLength;
    let timesHit = timesHit;
    let isSunk = isSunk;
  }

  hit() {
    this.timesHit += 1;
  }
  isSunk() {
    if (timesHit >= shipLength) {
      this.isSunk = true;
    }
  }
}
