import express from "express";
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post('/deploy',(req,res)=>{
    const repoURL = req.body.repoURL;
    

})

app.listen(3000)