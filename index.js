const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
//var  score = require("./gameAlgo")
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//------------------------------------------------------------------------------------------------------------------------------------------
const score = function(req, res) {
var scoreOfPlayer1 = 0;
var scoreOfPlayer2 = 0;
var scoreOfPlayer3 = 0;
var scoreOfPlayer4 = 0;
//...................................................................................
//...................................................................................
//                          random input function
var randomValue = function(){
  var players = ['scissors','paper','rock'];
  let i=Math.floor(Math.random()*players.length);
  return players[i];
}


//...................................................................................
//...................................................................................
//                          winning function
const game = function(player1 , player2) {

  var scorePlayer1 = 0;
  var scorePlayer2 = 0

switch(player1)
      {
          case 'rock':
            switch(player2)
                  {
                    case 'rock':
                        // tie
                        break;
                    case 'paper':
                        scorePlayer2 = scorePlayer2 + 1;
                        break;
                    case 'scissors':
                        scorePlayer1 = scorePlayer1 + 1;
                        break;
                    default:
                        console.log('Something went wrong');
                }
              break;
          case 'paper':
              switch(player2)
                {
                    case 'rock':
                        scorePlayer1 = scorePlayer1 + 1;
                        break;
                    case 'paper':
                        // tie
                        break;
                    case 'scissors':
                        scorePlayer2 = scorePlayer2 + 1;
                        break;
                    default:
                        console.log('Something went wrong');
                }
              break;
          case 'scissors':
          switch(player2)
                {
                    case 'rock':
                         scorePlayer2 = scorePlayer2 + 1;
                         break;
                    case 'paper':
                          scorePlayer1 = scorePlayer1 + 1;
                          break;
                    case 'scissors':
                          // tie
                          break;
                    default:
                        console.log('Something went wrong');
                }
              break;
          default:
              res.status(400).json({
                  error : "Wrong input"
                });
      }
      var arr = [];
      arr[0] = scorePlayer1;
      arr[1] = scorePlayer2;
      return arr;
}
//...................................................................................
//...................................................................................
//                          all player against With other player
for(var i = 1 ; i<51 ; i++){
  var  player1 = randomValue();
  var player2 = randomValue();
  var player3 = randomValue();
  var player4 = randomValue();
  console.log(player1 ,player2 ,player3 ,player4);
var total1 = game(player1 , player2);
     scoreOfPlayer1 = scoreOfPlayer1 + total1[0];
     scoreOfPlayer2 = scoreOfPlayer2 + total1[1];

var total2 = game(player1 , player3);
      scoreOfPlayer1 = scoreOfPlayer1 + total2[0];
      scoreOfPlayer3 = scoreOfPlayer3 + total2[1];
var total3 = game(player1 , player4);
      scoreOfPlayer1 = scoreOfPlayer1 + total3[0];
      scoreOfPlayer4 = scoreOfPlayer4 + total3[1];
var total4 = game(player2 , player3);
      scoreOfPlayer2 = scoreOfPlayer2 + total4[0];
      scoreOfPlayer3 = scoreOfPlayer3 + total4[1];
var total5 = game(player2 , player4);
      scoreOfPlayer2 = scoreOfPlayer2 + total5[0];
      scoreOfPlayer4 = scoreOfPlayer4 + total5[1];
var total6 = game(player3 , player4);
      scoreOfPlayer3 = scoreOfPlayer3 + total6[0];
      scoreOfPlayer4 = scoreOfPlayer4 + total6[1];
      console.log(scoreOfPlayer1 , scoreOfPlayer2 , scoreOfPlayer3 , scoreOfPlayer4)
    
    }
}
//....................................................................................................................

app.get("/" , (req , res) =>{
score();
//  console.log(`${score}`);
})

//------------------------------------------------------------------------------------------------------------------------------------------
// for listen port
 app.listen(port , () =>{
   console.log(`server is running ${port}`);

 })
