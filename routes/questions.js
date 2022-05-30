import express from 'express';
const routerQuestions = express.Router();



import { getQuestionsDB } from '../db/getData/getQuestions.js';



// 🏀✅
routerQuestions.get('/', async (req,res, next)=>{

    let data =  await getQuestionsDB();

    console.log('inside router function');


    res.json({questions: data});

    next();
});







import { get10QuestionsDB } from '../db/getData/get10Questions.js';

// get 10 random questions
// 🏀✅
routerQuestions.get('/10', async (req, res, next) => {

    let questions = await get10QuestionsDB();

    console.log('number of questions: >>>> ',questions.length);

    res.json(questions);

    next();
});






















export default routerQuestions;






