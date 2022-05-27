import express from 'express';
const routerQuestions = express.Router();



routerQuestions.get('/', (req,res,next)=>{


    res.send('questions router is up too');
});










export default routerQuestions;






