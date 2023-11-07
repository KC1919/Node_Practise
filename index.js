import fs from 'fs';
import http from 'http';
import getTime, {
    sayHello
} from './functions.js';

import express from 'express';
import path from 'path';
import ejs from 'ejs';

const app = express();

app.use(express.static("public"))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // res.sendFile("index.html");
    res.render('home', {
        data: "Kunal"
    });
})

app.get('/age', (req,res)=>{
    res.render('home', {
        age: 23
    })
})

// sayHello("Kunal");
// getTime();

app.listen(3000, (err) => {
    if (err) console.log(err);
    else console.log("Server running on port 3000");
});