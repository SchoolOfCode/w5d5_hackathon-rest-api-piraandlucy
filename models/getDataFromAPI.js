
import fetch from 'node-fetch';
// console.log('gettting api!');







export async function getDataFromAPI() {

    let finalTrivia = [];


    let response = await fetch('https://opentdb.com/api.php?amount=50');
    let data = await response.json();
    data = data.results;


    // shuffle and create your own data structure
    data.forEach((elem)=>{

        finalTrivia.push({

            category: elem.category,
            question: elem.question,
            correct_answer: elem.correct_answer,
            allAnswers: shuffleAnswers(elem.correct_answer, elem.incorrect_answers),
        
        
        });



    });


return finalTrivia;

}






function shuffleAnswers(correct_answer, incorrect_answers) {

    let answersUNshuffled = [correct_answer, ...incorrect_answers];
    let anwersShuffled =[];
    
    
    let randomNumber = Math.floor(Math.random() * answersUNshuffled.length);


    // shuffle here:
    while(anwersShuffled.length != answersUNshuffled.length ) {

        if(!anwersShuffled.includes(answersUNshuffled[randomNumber])) {

            anwersShuffled.push(answersUNshuffled[randomNumber]);
        }

        randomNumber = Math.floor(Math.random() * answersUNshuffled.length);


    }     // end of shuffle

    return anwersShuffled;

}










//  getDataFromAPI();
























