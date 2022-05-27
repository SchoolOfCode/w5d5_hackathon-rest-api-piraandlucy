
import { query } from '../db/index.js';
import { getDataFromAPI } from './getDataFromAPI.js';






export async function populateTableTrivia() {

    console.log('connecting to trivia DB');

    // getting data:
    let dataArr = await getDataFromAPI();



    // inserting into table trivia:
    // looping through dataArr:
    // we will have to do this is each loop:


    dataArr.forEach((trivia)=>{
        
        
        let question =  trivia.question;
        let correct_answer =  trivia.correct_answer;
        let answers_all =  trivia.allAnswers;
        let category =  trivia.category;



        let sql = "INSERT INTO trivia (category, question,correct_answer, all_answers) VALUES($1, $2, $3, $4); ";
        let response =  query(sql,[category, question, correct_answer, answers_all]);
    
    });
// end of loop








}






























