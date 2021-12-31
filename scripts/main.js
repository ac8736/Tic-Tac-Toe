var playBoard = [
  ["?", "?", "?"],
  ["?", "?", "?"],
  ["?", "?", "?"],
];
var isX = true;
var max_moves = 9;

function updateGrid(id) {
  let gridElement = document.getElementById(id).children[0];
  let pos = getPosition(id);
  if (gridElement.innerHTML == "") {
    max_moves--;
    if (isX) {
      updatePlayBoard(pos);
      gridElement.innerHTML = "X";
      if (checkForWin(pos)) {
        disableGrid();
        document.getElementById("end-text").innerHTML = "X is the winner!";
        return;
      }
      isX = false;
    } else {
      updatePlayBoard(pos);
      gridElement.innerHTML = "O";
      if (checkForWin(pos)) {
        disableGrid();
        document.getElementById("end-text").innerHTML = "O is the winner!";
        return;
      }
      isX = true;
    }
    gridElement.disabled == true;
  }
  if (max_moves == 0) {
    disableGrid();
    document.getElementById("end-text").innerHTML = "Tie!";
  }
}

function getPosition(id) {
  switch (id) {
    case "grid1":
      return [0, 0];
    case "grid2":
      return [0, 1];
    case "grid3":
      return [0, 2];
    case "grid4":
      return [1, 0];
    case "grid5":
      return [1, 1];
    case "grid6":
      return [1, 2];
    case "grid7":
      return [2, 0];
    case "grid8":
      return [2, 1];
    case "grid9":
      return [2, 2];
    default:
      return;
  }
}

function updatePlayBoard(position) {
  let row = position[0];
  let col = position[1];
  console.log(row);
  console.log(col);
  if (isX) {
    playBoard[row][col] = "X";
  } else {
    playBoard[row][col] = "O";
  }
}

function checkForWin(position) {
  let pos = position[0].toString() + position[1].toString();
  switch (pos) {
    case "00":
      return (
        checkDiagonalWin(position) ||
        checkHorizontalWin(position) ||
        checkVerticalWin(position)
      );
    case "01":
      return checkVerticalWin(position) || checkHorizontalWin(position);
    case "02":
      return (
        checkDiagonalWin(position) ||
        checkHorizontalWin(position) ||
        checkVerticalWin(position)
      );
    case "10":
      return checkVerticalWin(position) || checkHorizontalWin(position);
    case "11":
      return (
        checkDiagonalWin(position) ||
        checkHorizontalWin(position) ||
        checkVerticalWin(position)
      );
    case "12":
      return checkVerticalWin(position) || checkHorizontalWin(position);
    case "20":
      return (
        checkDiagonalWin(position) ||
        checkHorizontalWin(position) ||
        checkVerticalWin(position)
      );
    case "21":
      return checkVerticalWin(position) || checkHorizontalWin(position);
    case "22":
      return (
        checkDiagonalWin(position) ||
        checkHorizontalWin(position) ||
        checkVerticalWin(position)
      );
    default:
      return false;
  }
}

function checkHorizontalWin(position) {
  let row = position[0];
  let col = position[1];
  if (col == 0) {
    if (
      playBoard[row][col] == playBoard[row][col + 1] &&
      playBoard[row][col] == playBoard[row][col + 2]
    ) {
      return true;
    }
  }
  if (col == 1) {
    if (
      playBoard[row][col] == playBoard[row][col - 1] &&
      playBoard[row][col] == playBoard[row][col + 1]
    ) {
      return true;
    }
  }
  if (col == 2) {
    if (
      playBoard[row][col] == playBoard[row][col - 1] &&
      playBoard[row][col] == playBoard[row][col - 2]
    ) {
      return true;
    }
  }
  return false;
}

function checkVerticalWin(position) {
  let row = position[0];
  let col = position[1];
  if (row == 0) {
    if (
      playBoard[row][col] == playBoard[row + 1][col] &&
      playBoard[row][col] == playBoard[row + 2][col]
    ) {
      return true;
    }
  }
  if (row == 1) {
    if (
      playBoard[row][col] == playBoard[row - 1][col] &&
      playBoard[row][col] == playBoard[row + 1][col]
    ) {
      return true;
    }
  }
  if (row == 2) {
    if (
      playBoard[row][col] == playBoard[row - 1][col] &&
      playBoard[row][col] == playBoard[row - 2][col]
    ) {
      return true;
    }
  }
  return false;
}

function checkDiagonalWin(position) {
  let row = position[0];
  let col = position[1];
  if (row == 0 && col == 0) {
    if (
      playBoard[row][col] == playBoard[row + 1][col + 1] &&
      playBoard[row][col] == playBoard[row + 2][col + 2]
    ) {
      return true;
    }
  }
  if (row == 0 && col == 2) {
    if (
      playBoard[row][col] == playBoard[row + 1][col - 1] &&
      playBoard[row][col] == playBoard[row + 2][col - 2]
    ) {
      return true;
    }
  }
  if (row == 2 && col == 0) {
    if (
      playBoard[row][col] == playBoard[row - 1][col + 1] &&
      playBoard[row][col] == playBoard[row - 2][col + 2]
    ) {
      return true;
    }
  }
  if (row == 2 && col == 2) {
    if (
      playBoard[row][col] == playBoard[row - 1][col - 1] &&
      playBoard[row][col] == playBoard[row - 2][col - 2]
    ) {
      return true;
    }
  }
  if (row == 1 && col == 1) {
    if (
      playBoard[row][col] == playBoard[row - 1][col - 1] &&
      playBoard[row][col] == playBoard[row + 1][col + 1]
    ) {
      return true;
    }
    if (
      playBoard[row][col] == playBoard[row - 1][col + 1] &&
      playBoard[row][col] == playBoard[row + 1][col - 1]
    ) {
      return true;
    }
  }
  return false;
}

function disableGrid() {
  let buttons = document
    .getElementById("game-container")
    .querySelectorAll("div#game-container > div");
  buttons.forEach(function (userItem) {
    userItem.style.pointerEvents = "none";
  });
  let buttons2 = document.querySelectorAll("div");
  buttons2.forEach(function (userItem) {
    userItem.style.cursor = "default";
  });
}

function reset() {
  location.reload();
}
