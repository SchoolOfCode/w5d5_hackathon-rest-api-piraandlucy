import { getQuestionsMODELS }  from '../../models/getQuestionsFromTriviaDB.js';
import { query } from '../index.js'; 



export async function getQuestionsDB() {



    let sql = 'SELECT * FROM trivia ORDER BY id;';


    let response = await getQuestionsMODELS(sql);

    console.log('finished in DB');
    return response;
}





