

import { query } from "../index.js";
import {generate10SLQstrings } from '../../models/get10QuestionsMODEL.js';


// 🏀✅
export async function get10QuestionsDB() {

    let stringMain = generate10SLQstrings().string;
    let ids = generate10SLQstrings().IDS;

    let response = await query(stringMain, ids);

    // console.log(response.rows);
    return response.rows;

}






























