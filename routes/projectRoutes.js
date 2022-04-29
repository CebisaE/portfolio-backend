const express = require('express');
const app= express.Router();
const fixArray = require('../helpers')
let Projects=[
    {"id":1,
    "img_url":"https://i.postimg.cc/sxsHbVSV/Screenshot-2022-04-29-124707.png",
    "title":"Temperature Convertor",
    "html":"38.5%",
    "css":"19.3%",
    "javascript":"42.2%",
    "details": "a temperature convertor built out of javascript",
    // "github":"https://github.com/CebisaE/project",
    "netlify":"https://emihlecebisa.netlify.app/"
},
    {"id":2, 
    "img_url":"https://i.postimg.cc/90hJH0FD/teamsite.png",
    "title":"Team Site", 
    "html":"75.9",
    "css":"24,1%",
    "javascript":"0%",
    "details":"a group work to test progress ",
    // "github":"https://github.com/Mugammad/Team_site",
    "netlify":"https://idkhtml.netlify.app/"
},
    {"id":3, 
    "img_url":"https://i.postimg.cc/yNGbt7ZR/ecommerce.png",
    "title": "E-commerce", 
    "html":"92.6%",
    "css":"7,4%",
    "javascript":"0%",
    "details":"my first e-commerce site",
    // "github":"https://github.com/CebisaE/onlinestore",
    "netlify":"https://istore-premium-reseller.netlify.app"
},
    {"id":4,
    "img_url":"https://i.postimg.cc/pr3VLw45/Screenshot-from-2021-11-25-12-20-52-min.png",
    "title": "Calculator", 
    "html":"85.1%",
    "css":"50.8%",
    "javascript":"9,2%",
    "details":"a calculator with javascript ",
    // "github":"https://github.com/CebisaE/javascriptcalculator",
    "netlify":"https://emihle-calculator.netlify.app"
},
    {"id":5, 
    "img_url":"https://i.postimg.cc/fTGdyphN/Screenshot-from-2022-01-28-13-21-22-min.png",
    "title": "First Attempt Portfolio", 
    "html":"62,8%",
    "css":"37,2%",
    "javascript":"0%",
    "details":"my first attempt at making my portfolio",
    // "github":"https://github.com/CebisaE/mysite",
    "netlify":"https://emihle-cebisa.netlify.app"
},
    {"id":6, 
    "img_url":"https://i.postimg.cc/ydJPcCzK/Screenshot-from-2022-01-28-13-39-54.png",
    "title": "point of sale", 
    "html":"21,2%",
    "css":"4,2%",
    "javascript":"74.6%",
    "details":"my point of sales assignment",
    // "github":"https://github.com/CebisaE/pos-project",
    "netlify":"https://mini-pos-project.netlify.app"
}
];
//get all projects
app.get('/',(req, res) => {
    res.send(Projects)
});
//get 1 project
app.get('/:id',(req, res) => {
    const Project= Projects.find((Project) => Project.id == req.params.id);
    if(!Project)res.status(404).send({msg: 'Project not found'});
    res.send(Project)
});
//create a projects (push to an array)
app.post('/',(req, res)=>{
let {img_url, title, html, css, javascript, details, github, netlify}=req.body;
if (!img_url|| !title|| !html|| !css|| !javascript|| !details || !github|| !netlify)
res.status(400).send({msg: "not all information sent"});
let new_project ={
    id:Project.length +1,
    img_url,
    title,
    html,
    css,
    javascript,
    details,
    github,
    netlify,
};
Projects.push(new_project);
res.send(new_project);
});
//update a project (update item in array)
app.put('/:id',(req, res)=>{
let Project= Projects.findIndex((Project)=> Project.id==req.params.id);
if(!Project) res.status(404).send({msg: 'Project not found'});
let {img_url, title, html, css, javascript, details, github, netlify}=req.body;
if (img_url) Projects[Project].img_url=img_url;
if (title) Projects[Project].title=title;
if (html) Projects[Project].html=html;
if (css) Projects[Project].css=css;
if (javascript) Projects[Project].javascript=javascript;
if (details) Projects[Project].details=details;
if (github) Projects[Project].github=github;
if (netlify) Projects[Project].netlify=netlify;
res.send(Project);
});
//delete a project (remove from array)
app.delete('/:id',(req, res)=>{
Projects=Project.filter((Project) => project.id !== req.params.id);
fixArrayId(Projects);
res.send({msg:'item removed'});
});

module.exports=app
