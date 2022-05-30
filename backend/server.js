const express = require('express');
const Contact = require('./db/model/form');
require('./db/conn');
const app = express();


app.use(express.json());


app.post('/form',(req,res)=>{
    
    const contact = new Contact(
    
    req.body

       
       )
    //    contact.save().then(()=>{
    //           res.send(contact)
    //      }).catch((err)=>{
    //             res.send(err)
    //         })

   
        
    
    })



app.get('api/v1/form',(req,res)=>{


    Contact.find().then((contact)=>{
        res.send(contact)
        console.log(contact)
    }).catch((err)=>{
        res.send(err)
    })



})



const auth = (req,res,next)=>{
    if(req.query.admin === 'true'){

        res.send('THIS IS ADMIN PAGE')
    }
    else{
        res.send('THIS IS USER PAGE')
    }

    next()
}

app.get('/user',auth,(req,res)=>{
        
    res.send('THIS IS USER PAGE')
    
    })

    app.get('/home',auth,(req,res)=>{
        res.send("welcome to home page")
    })

     
    





app.use(auth)
// const admin=(req,res)=>{

// }

// const developer=(req,res)=>{

// }



app.listen(4000);