'use strict'
const express = require(`express`);
const bodyParser = require('body-parser')

const app = express();

const PORT = 3001;

app.use('/css', express.static(__dirname + `/app/css/`));
app.use('/assets', express.static(__dirname + `/app/assets/`));
app.use('/js', express.static(__dirname + `/app/js/`));

app.use(bodyParser.urlencoded({ extend: false }));

var user;

app.post(``, (req, res) =>{
    if(!req.body.name || !req.body.surname) return res.sendStatus(400);
    console.log(req.body);
    user = req.body;
    res.redirect(`/`);
});


app.get(``, (req, res) => {
    if(typeof user !== `object`) return res.sendFile(__dirname + `/app/index.html`);
    res.send(`Данные отправлены для: ${user.email}`);
    user = undefined;
});
app.listen(PORT, () => console.log(`server listening at http://localhost:3001`));