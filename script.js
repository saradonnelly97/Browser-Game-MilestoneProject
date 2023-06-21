let score;
let duration = 30;
let startTime;
let ended = true;
let clicks;
let startTimestamp;
let timerId;

let computerPencilHeight = 0;
let computerPencilInterval;
let finishLinePosition = 314;

var timerTxt = document.getElementById("timer");
var scoreTxt = document.getElementById("score");
var clicksTxt = document.getElementById("clicks");
var goButton = document.getElementById("goButton");
var resetButton = document.getElementById("resetButton");
var clickArea = document.getElementById("clickArea");
var skillValue = document.getElementById("skillValue")
var playerPencilLead = document.getElementById("playerPencilLead");
var cpuPencilLead = document.getElementById("cpuPencilLead");
var winMessage = document.getElementById("win-message");
var loseMessage = document.getElementById("lose-message");
var timeOutMessage = document.getElementById("timeout-message");

var show = function(elem) {
    elem.style.display = 'inline';
};

var hide = function(elem) {
    elem.style.display = 'none';
};



function titleMusic() {
    var audio = new Audio('./assets/pencilclickergame.wav');
    audio.play();
    audio.loop = true;
  }

function timer() {
    hide(goButton);
    score = -1;
    ended = false;
    startTime = new Date().getTime();
    timerId = setInterval(function() {
        var total = (new Date().getTime() - startTime) / 1000;
        if (total < duration) {
            timerTxt.textContent = total.toFixed(2);
        } 
        else {
            ended = true;
            clearInterval(total);          
            timeOutGame();
        }
    }, 1);
        //return total;
}

function endGame() {
    if (playerWinner = true) {
        clearInterval(timerId);
    } 
    else if (cpuWinner = true) {
        console.log(total);
        clearInterval(timerId);
    } 
   
}

function playerWinGame() {
    playerPencilLead.style.height = finishLinePosition + 'px';
    clearInterval(computerPencilInterval);
    winMessage.style.display = 'block';

    setTimeout(function () {
        resetButton.style.visibility = 'visible';
        resetButton.style.display = 'block';
    }, 3000);
    endGame();
    startMuuuuusic();
}

function timeOutGame() {
    if(ended == true){
        playerPencilLead.style.height = 0;
        clearInterval(computerPencilInterval);
        timeOutMessage.style.display = 'block';
        }

    setTimeout(function () {
        resetButton.style.visibility = 'visible';
        resetButton.style.display = 'block';
    }, 3000); 
    startMuuuuuusic();

}
var cpuWinner = false;
var playerWinner = false;

function cpuWinGame() {
    if(cpuPencilLead.style.height == finishLinePosition + 'px'){
    clearInterval(computerPencilInterval);
    cpuWinner = true;
    playerWinner = false;
    loseMessage.style.display = 'block';
    }

    setTimeout(function () {
        resetButton.style.visibility = 'visible';
        resetButton.style.display = 'block';
    }, 3000); 
    endGame();
    startMuuuuuusic();
}

resetButton.addEventListener('click', function () {
    resetGame();
});

function resetGame() {
    playerPencilLead.style.height = '3px';
    resetButton.style.visibility = 'hidden';
    winMessage.style.display = 'none';
    loseMessage.style.display = 'none';
    timeOutMessage.style.display = 'none';
    computerPencilHeight = 0;
    cpuPencilLead.style.transition = 'none';  
    clearInterval(computerPencilInterval);
    timer();
}

goButton.addEventListener("click", function() {
    timer();
});

clickArea.addEventListener("click", function() {
    if (!ended) {
        score++;
        scoreTxt.textContent = score;
        handleClick();
        startComputerPencil();
        startPlayerPencil();
    }
});

function handleClick() {
    if (!startTimestamp) {
      startTimestamp = performance.now();
      skillValue.style.transform = 'scaleY(0)';
      //requestAnimationFrame(updateGauge);
    }
    
    clicks++;
  }
  
//     function updateGauge(timestamp) {
//     const elapsedTime = timestamp - startTimestamp;
//     const scale = Math.min(elapsedTime / 2000, 1);
//     skillValue.style.transform = `scaleY(${scale})`;
    
//     if (scale < 1) {
//       requestAnimationFrame(updateGauge);
//     } else {
//       const clicksPerTwoSeconds = Math.round((clicks / elapsedTime) * 1000);
//       startTimestamp = null;
//       clicks = 0;
//       skillValue.style.transform = 'scaleY(0)';
//     }
//   }
  
function startComputerPencil() {
    if (computerPencilInterval) {
      clearInterval(computerPencilInterval);
    }
  
    computerPencilInterval = setInterval(function() {
      computerPencilHeight += 2;
      cpuPencilLead.style.height = computerPencilHeight + "px";

      if (computerPencilHeight >= finishLinePosition) {
        clearInterval(computerPencilInterval);
        computerPencilHeight +=0;
        cpuWinGame();
      } 
      else if(playerPencilLead >= finishLinePosition) { 
        computerPencilHeight += 0;
        playerWinGame()
      }
  
    }, 100);


  }

function startPlayerPencil() {
    let currentHeight = parseInt(playerPencilLead.style.height) || 0;
    playerPencilLead.style.height = (currentHeight + 5) + 'px';

    if (currentHeight >= finishLinePosition) {
        playerWinGame();
    }
}


function trackClicksPerSecond() {
    let clicks = 0;
    let timerId;

    function startTimer() {
        clicks = 0; 
        timerId = setInterval(resetClicks, 1000);
    }

    function resetClicks() {
        console.log('clicks per second: ', clicks);
        if (clicks >= 7) {
        playerPencilLead.style.height = 0;
        playerPencilLead.style.transition = 'none';
        startMuuuusic();
        }
        clicks = 0
    }
    function trackClick() { 
        clicks++;
    }
    const trackedElement = document.getElementById('clickArea');
    trackedElement.addEventListener('click', trackClick);
    startTimer();
    return clicks;
}

trackClicksPerSecond();

function startMusic() {
  music.play();
}
function startMuusic() {
    music2.play();
}
function startMuuusic() {
    music3.play();
}
function startMuuuusic() {
    music4.play();
}
function startMuuuuusic() {
    music5.play();
}
function startMuuuuuusic() {
    music6.play();
}

  

function hideSplashPage() {
  var splashPage = document.getElementById("splashPage");
  splashPage.style.display = "none";
}
function returnToTitle() {
    var instructionManual = document.getElementById("instructionManual");
    instructionManual.style.zIndex = "1";

}  
function hideInstructionManual() {
    var instructionManual = document.getElementById("instructionManual");
    instructionManual.style.display = "none";
  }

function toggleInstructionManual() {
  var instructionManual = document.getElementById("instructionManual");
  
  if (instructionManual.style.zIndex === "1") {
    instructionManual.style.zIndex = "4";
  } else {
    instructionManual.style.zIndex = "1";
  }
}

endGame();