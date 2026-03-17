 //convert back to object using parse
      const score =JSON.parse(localStorage.getItem('score'))||{
          wins:0,
          losses:0,
          ties:0
        };

        updateScoreElement();
/*
      if(score===null){
        score={
          wins:0,
          losses:0,
          ties:0
        };
      }
        */
      let isAutoplaying=false;
      let intervalId;

      function autoPlay(){
        if(!isAutoplaying){
          intervalId=setInterval(function(){
          const playerMove = pickComputerMove();
          playGame(playerMove);
        },1000);
        isAutoplaying=true;

        }
        else{
           clearInterval(intervalId);
           isAutoplaying=false;
        }
      }

      function playGame(playerMove){
            const computerMove =pickComputerMove();
          result='';

          if(playerMove==='scissors'){
              if(computerMove==='rock'){
              result='you lose';
            }
            else if(computerMove==='paper'){
              result='you win';
            }
            else if(computerMove==='scissors'){
              result='tie';
            }
            }
          

          else if(playerMove==='paper'){
            const computerMove =pickComputerMove();
     
              result='';
              if(computerMove==='rock'){
                result='you win';
              }
              else if(computerMove==='paper'){
                result='tie';
              }
              else if(computerMove==='scissors'){
                result='you lose';
              }
          }

          else if(playerMove==='rock'){
            const computerMove= pickComputerMove();
               result='';

              if(computerMove ==='rock'){
                result='tie';
              }
              else if(computerMove==='paper'){
                result='you lose';
              }
              else if(computerMove==='scissors'){
                result='you win';
              }
   
          }

          if(result==='you win'){
            score.wins+=1;
          }
          else if(result==='you lose'){
            score.losses+=1;
          }
          else if(result==='tie'){
            score.ties+=1;
          }

          //Even after refresh it don't vanish, only accept sring
          localStorage.setItem('score',JSON.stringify(score));
          
        updateScoreElement();
          
        document.querySelector('.js-result').innerHTML=result;

       document.querySelector('.js-move').innerHTML=`You
          <img src="image/${playerMove}-emoji.png" class="move-icon">
        <img src="image/${computerMove}-emoji.png" class="move-icon">
        Computer`;


      }


      function updateScoreElement(){
             document.querySelector('.js-score').innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
      }
  
     function pickComputerMove(){
     let computerMove='';
      const randomNumber=Math.random();
     
     if(randomNumber>=0 && randomNumber<1/3){
      computerMove='rock'
     }
     else if(randomNumber>=1/3 && randomNumber<2/3){
      computerMove='paper'
     }
     else if(randomNumber>=2/3 && randomNumber<1){
      computerMove='scissors'
     }
     return computerMove;
     }