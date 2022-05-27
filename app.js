import express from "express";
const app = express();
const PORT = process.env.port || 3000;




// test route
app.get("/", function (req, res) {
  res.json({
    success: true,
    message: "Test route up and running!",
  });
});



import  routerQuestions  from './routes/questions.js';

// questions router:
app.use('/questions', routerQuestions);






app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
