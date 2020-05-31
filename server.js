'use strict'
const express = require(`express`);
const bodyParser = require('body-parser');
const mailer = require(`./nodemailer`);
const request = require(`request`);
const app = express();

const PORT = 3000;

app.use('/css', express.static(__dirname + `/app/css/`));
app.use('/assets', express.static(__dirname + `/app/assets/`));
app.use('/js', express.static(__dirname + `/app/js/`));

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.urlencoded({ extend: false }));
app.use(bodyParser.json());
var user_date;

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index');
});

//редирект на страницу курсов
app.get('/courses', function (req, res) {
    res.render('courses');
});

app.post('', (req, res) => {
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
    }
    if(
            req.body.captcha === undefined ||
                req.body.captcha === '' ||
                req.body.captcha === null
    ) {
    return res.json({ 'success': false, "msg": 'Поставьте галочку "I`am not the robot" в самом низу формы' });
};
//Secret key
const secretKey = '6LdoErwUAAAAAIoiNAWZaaQsVgaO4LjnBAv0gNjU';

//Verify URL
const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body.captcha}&remoteip=${req.connection.remoteAddress}`;

//Make Request To Verify
request(verifyUrl, (err, response, body) => {
    body = JSON.parse(body);

    //If no successful
    if (body.success !== undefined && !body.success) {
        return res.json({ 'success': false, "msg": 'Проверка "I`am not the robot" не пройдена' });
    }

    //If successful
    return res.json({ 'success': true, "msg": 'Заявка отправлена!' }),
    console.log('json msg'),
    mailer(message),
    console.log('messange send');
    // user_date = req.body,
    // res.render('success', { data: req.user_date }),
    // console.log('render');
    });
    

});

app.listen(PORT, () => console.log(`server listening at http://localhost:3000/`));