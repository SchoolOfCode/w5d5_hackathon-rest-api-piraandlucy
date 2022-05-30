


// 🏀✅
export function generate10SLQstrings() {

      
    let stringMain = "SELECT * FROM trivia WHERE id IN ($1,$2,$3, $4, $5, $6, $7, $8, $9, $10);";
    let ids = generate10RandomNumbers(50);

    let sqls=  {string: stringMain, IDS: ids};
    // console.log(sqls);

    return sqls;
  }











// returns array:🏀
function generate10RandomNumbers(max) {
    
    
    let randomNumbers = [];
    
    let randomNumber = Math.floor(Math.random()*max);


    for(let i=0;i<100;i++) {

        if(randomNumbers.length ==10) {
            return
        }
        else {
            
        }


    }
    

  





    // console.log(randomNumbers);
    return randomNumbers;

}














