document.addEventListener("DOMContentLoaded", function () {
    var start = document.getElementById("start");
    var end = document.getElementById("end");
    var boundaries = document.querySelectorAll(".boundary");
    var maze = document.getElementById("maze");
    var status = document.getElementById("status");
    var winCount = document.getElementById("winCount");
    var loseCount = document.getElementById("loseCount");
    var timeTaken = document.getElementById("timeTaken");
  
    var gameStarted = false;
    var gameWon = false;
    var wins = 0;
    var losses = 0;
    var startTime = 0;
    var endTime = 0;
    var bestTime = Infinity;
  
    start.addEventListener("mouseover", function () {
      if (!gameStarted) {
        gameStarted = true;
        gameWon = false;
        status.innerText = "Game in progress.";
        startTime = Date.now();
      }
    });
  
    end.addEventListener("mouseover", function () {
      if (gameStarted && !gameWon) {
        endTime = Date.now();
        var timeInSeconds = (endTime - startTime) / 1000;
        if (timeInSeconds < bestTime) {
          bestTime = timeInSeconds;
          timeTaken.innerText = bestTime.toFixed(2) + " seconds";
        }
        status.innerText = "You win!!!";
        gameWon = true;
        wins++;
        winCount.innerText = wins;
      }
      gameStarted = false;
    });
  
    maze.addEventListener("mouseleave", function () {
      if (gameStarted && !gameWon) {
        status.innerText = "You lose!!!";
        for (var i = 0; i < boundaries.length; i++) {
          boundaries[i].classList.add("youlose");
        }
        losses++;
        loseCount.innerText = losses;
      }
      gameStarted = false;
    });
  
    for (var i = 0; i < boundaries.length; i++) {
      boundaries[i].addEventListener("mouseover", function () {
        if (gameStarted && !gameWon) {
          status.innerText = "You lose!!!";
          for (var j = 0; j < boundaries.length; j++) {
            boundaries[j].classList.add("youlose");
          }
          losses++;
          loseCount.innerText = losses;
        }
        gameStarted = false;
      });
    }
    end.addEventListener('mouseover', function() {
      status.textContent = 'You win!';
  });

  start.addEventListener('click', function() {
      boundaries.forEach(boundary => {
          boundary.style.backgroundColor = '#eeeeee';
      });
      status.textContent = 'Move your mouse over the "S" to begin.';
  });
  
    var restartButton = document.getElementById("restartButton");
  
    restartButton.addEventListener("click", function () {
      resetGame();
    });
  
    function resetGame() {
      status.innerText = "Move your mouse over the 'S' to begin.";
      gameStarted = false;
      gameWon = false;
  
      for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].classList.remove("youlose");
      }
    }
  });
  