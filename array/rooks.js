function canCapture([yourRook, opponentsRook]) {
  //rows
  if (yourRook[0] == opponentsRook[0]) {
    return true;
  } else if (yourRook[1] == opponentsRook[1]) {
    return true;
  } else {
    return false;
  }
  //columns
}

// Write a function that returns true if two rooks can attack each other,
//and false otherwise.

// Assume no blocking pieces.
// Two rooks can attack each other if they share the same row (letter)
// or column (number).

// canCapture(["A8", "E8"]) ➞ true
