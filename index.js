const express = require('express');
const projectRoutes= require('./routes/projectRoutes');
const testimonialsRoutes= require('./routes/testimonialsRoutes');


const app = express();
app.use(express.json());


app.get('/',(req, res)=>{
res.send({msg:"welcome to emihle's portfolio backend"})
});

app.use('/Projects',projectRoutes)
app.use('/testimonials',testimonialsRoutes)


app.listen(5000)