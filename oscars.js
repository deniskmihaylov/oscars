function oscars(input) {
    let actorName = input[0];
    let academyPoints = Number(input[1]);
    let judgesCount = Number(input[2]);
  
      for (let i = 3; i < input.length; i += 2){
          let judgeName = input[i]; 
          let judgePoints = input[i + 1]; 
  
          let result = judgeName.length * judgePoints / 2; 
          academyPoints += result; 
  
          if (academyPoints > 1250.5) {
              console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`); 
              return; 
          }
      }
      let pointsNeeded = 1250.5 - academyPoints
      console.log(`Sorry, ${actorName} you need ${pointsNeeded.toFixed(1)} more!`)
  }