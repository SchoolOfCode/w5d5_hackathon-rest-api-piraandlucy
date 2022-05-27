import { query } from "../index.js";






async function createTableTRIVIA() {

    console.log('creating table trivia');

let sql = "CREATE TABLE IF NOT EXISTS trivia (id INT GENERATED ALWAYS AS IDENTITY, category VARCHAR(50), question VARCHAR(300), correct_answer VARCHAR(500), all_answers VARCHAR(700)[]);";

const response = await query(sql);


console.log('finished creating table trivia');

};



// createTableTRIVIA();




