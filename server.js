'use strict'
const express = require(`express`);
const bodyParser = require('body-parser');
const mailer = require(`./nodemailer`);

const app = express();

const PORT = 22;

app.use('/css', express.static(__dirname + `/app/css/`));
app.use('/assets', express.static(__dirname + `/app/assets/`));
app.use('/js', express.static(__dirname + `/app/js/`));

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.urlencoded({ extend: false }));
var user_date;

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
});

app.post(``, (req, res) =>{
    const message = {
    from: 'KJ-taxi.by <kjgrouptaxi@gmail.com>', // sender address
    to: `kjgrouptaxi@gmail.com`, // list of receivers
    subject: 'New driver registration', // Subject line
    html: `<table style="max-width:580px">
<tr>
    <td>${req.body.name}</td>
    <td>${req.body.surname}</td>
    <td>${req.body.middlename}</td>
</tr>
<tr>
    <td>${req.body.birthday}</td>
    <td>${req.body.region}</td>
    <td>${req.body.locality}</td>
</tr>
<tr>
    <td>Опыт: ${req.body.experience} лет</td>
    <td>${req.body.carbrand}</td>
    <td>${req.body.caryear} года</td>
</tr>
<tr>
    <td colspan="2">${req.body.email}</td>
    <td>${req.body.phone}</td>
</tr>
<tr>
    <td colspan="3">${req.body.comment}</td>
</tr>
</table>`

    };
    mailer(message);
    user_date = req.body;
    res.render('success', {data: req.body});
});

app.listen(PORT, () => console.log(`server listening at http://kj-taxi.in-dev.work:22/`));