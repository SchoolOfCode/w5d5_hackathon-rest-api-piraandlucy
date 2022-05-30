
// import query?
import { query } from "../db/index.js";




export async function getQuestionsMODELS(sql) {


    let data = await query(sql);

    let result = {success: false, questions: data.rows, };

    console.log('finished in models');
    // console.log('from models: >>>>>',  result);

    return result;
}