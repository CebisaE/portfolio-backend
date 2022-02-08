const express = require('express');
const app= express.Router();
const fixArray = require('../helpers');
let testimonials=[
    {
        "id":"1",
        "img_link":"https://i.postimg.cc/NG9DM2jd/alex.jpg",
        "name":"Alex Sexwale",
        "title":"Lecturer",
        "text":"Emihle is a hard and dedicated worker she is always looking for ways to improve on her knowledge.",
        "email":"alex@lifechoices.com"
    },
    {
        "id":"2",
        "img_link":"https://i.postimg.cc/5yvv0jfZ/sindile-min.jpg",
        "name":"Sindile Makhathini (phakade lam)",
        "title":"Collegue",
        "text":"Emihle is someone I came to know from the Academy and I can tell she is a trustworthy, professional and would be an asset to any company she would align herself to",
        "email":"smakhathini24@gmail.com"
    },
    {
        "id":"3",
        "img_link":"https://i.postimg.cc/pTLnDqRY/Godwin-min.jpg",
        "name":"Godwin Dzapatsva",
        "title":"Head of curriculum and Learning",
        "text":"Emihle has a pleasant personality and possesses some leadership qualities",
        "email":"godwin@lifechoices.com"
    },
    {
        "id":"4",
        "img_link":"https://i.postimg.cc/KYk8drz8/amaarah.jpg",
        "name":"Amaarah January",
        "title":"Collegue",
        "text":"Emihle is a great joy to be around. Her presence alone can brighten up your day She is also a valuable team member to have as she is helpful and friendly. I enjoy working with her because she  does put a lot of effort in",
        "email":"amaarahjanuary456@gmail.com"
    },
    {
        "id":"5",
        "img_link":"https://i.postimg.cc/PxHn2mvc/kago.jpg",
        "name":"kago pooe",
        "title":"Collegue",
        "text":"Being a classmate of Emihle has been a pleasure. She combines hard work and focus with genuine warmth and friendliness,Her coding skills have grown tremendously since we have taken this class",
        "email":"kago@gmail.com"
    },
    {
        "id":"6",
        "img_link":"https://i.postimg.cc/MZr1Y2cc/craigee-min.jpg",
        "name":"Craig Braaf",
        "title":"Collegue",
        "text":"Emihle never fails to draw in a crowd and make them laugh. She brings a sense of unity around people her honesty is what makes you appreciate her that much more.",
        "email":"braafcraig@gmail.com"
    }
    
];

//get all testimonials
app.get('/',(req, res) => {
    res.send(testimonials)
});

//get 1 project
app.get('/:id',(req, res) => {
    const testimonial = testimonials.find((testimonial) => testimonial.id == req.params.id);
    if(!testimonial)res.status(404).send({msg: 'testimonial not found'});
    res.send(testimonial)
});  

//create a testimonial (push to an array)
app.post('/',(req, res)=>{
    let {img_link, title, name, text, email}=req.body;
    if (!img_link|| !title|| !name|| !text|| !email)
    res.status(400).send({msg: "not all information sent"});
    let new_testimonial ={
        id:testimonial.length +1,
        img_link,
        title,
        name,
        text,
        email,
    };
    testimonial.push(new_testimonial);
    res.send(new_testimonial);
    });

    //update a project (update item in array)
app.put('/:id',(req, res)=>{
    let testimonial = testimonials.findIndex((testimonial)=> testimonial.id==req.params.id);
    if(!testimonial) res.status(404).send({msg: 'testimonial not found'});
    let {img_link, title, name, text, email}=req.body;
    if (img_link) testimonials[testimonial].img_url=img_url;
    if (title) testimonials[testimonial].title=title;
    if (name) testimonials[testimonials].name=name;
    if (text) testimonials[testimonial].text=text;
    if (email) testimonials[testimonial].email=email;
    res.send(testimonial);
    });

    //delete a testimonial (remove from array)
app.delete('/:id',(req, res)=>{
    testimonial=testimonial.filter((testimonial) => testimonial.id !== req.params.id);
    fixArrayId(testimonials);
    res.send({msg:'testimonial removed'});
    });
module.exports=app
