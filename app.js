
//- The game has 2 players, playing in rounds
//- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
//- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
//- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
//- The first player to reach 100 points on GLOBAL score wins the game


var scores, roundScore, activePlayer, gamePlaying;

newGame();


    //          ADDING EVENT LISTENER       //

//needs 2 things, the event that causes the listener to activate, and the function that will be used in this callback function.  We will use an anonymous function becuase it can only be used once which is what we are looking for. If we wrote the function elsewhere we could call it multiple times but that isnt necessary here.


document.querySelector('.btn-roll').addEventListener('click', function(){
    
    if (gamePlaying) {
    
    // 1. random number
    
    var dice = Math.floor(Math.random() * 6) + 1;
    
    // 2. display the result
    var diceDOM = document.querySelector('.dice');
    
    diceDOM.style.display = 'block';
    
    diceDOM.src = 'dice-' + dice + '.png';
    
    
    // 3. display the round score IF the rolled number is NOT a 1
    
    if(dice !== 1) {
        //add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        
    } else {
        //next player
        
        nextPlayer();
        }
        
    }
});

    document.querySelector('.btn-hold').addEventListener('click', function(){
    
        if(gamePlaying) {
            
    //add current score to Global Score
    
    scores[activePlayer] += roundScore;
    
    
    //Update UI 
    
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    //Check if Player won the game
    
    if (scores[activePlayer] >= 20) {
        
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        
        document.querySelector('.dice').style.display = 'none';
        
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        
        gamePlaying = false;
        
    } else {
    
    //nextPlayer
    nextPlayer();
        
        }
    }
});

function nextPlayer() {
    
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    
    roundScore = 0;
    
    document.getElementById('current-0').textContent = '0';
    
    document.getElementById('current-1').textContent = '0';
    
    document.querySelector('.player-0-panel').classList.toggle('active');
    
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');
    
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', newGame);

function newGame() {

scores = [0,0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;
    
//document.getElementById('current-' + activePlayer).innerHTML = dice;  how i'd do it

//this is a setter because it sets a value


//this is a getter b/c we get a value

//var x = document.getElementById('score-0').textContent;
//console.log(x);

//document.querySelector('.dice').style.display = 'none';


document.getElementById('score-0').textContent = '0';

document.getElementById('score-1').textContent = '0';

document.getElementById('current-0').textContent = '0';

document.getElementById('current-1').textContent = '0';

document.getElementById('name-0').textContent = 'Player 1!';
    
document.getElementById('name-1').textContent = 'Player 2!';
    
document.querySelector('.player-0-panel').classList.remove('winner');
    
document.querySelector('.player-1-panel').classList.remove('winner');
    
document.querySelector('.player-1-panel').classList.remove('active');
    
document.querySelector('.player-1-panel').classList.remove('active');
    
document.querySelector('.player-0-panel').classList.add('active');
}
