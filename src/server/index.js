const AYLIENTextAPI = require('aylien_textapi');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const AYLIEN_APP_ID = process.env.AYLIEN_APP_ID;
const AYLIEN_API_KEY = process.env.AYLIEN_API_KEY;

const textapi = new AYLIENTextAPI({
    application_id: AYLIEN_APP_ID,
    application_key: AYLIEN_API_KEY
});


function getTextSentiment(text) {
    textapi.sentiment({
        'text': text
    }, function (error, response) {
        if (error === null) {
            console.log(response);
        }
    })
}


app.post('/send-text', function(req, res) {
    console.log(req.body);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
});