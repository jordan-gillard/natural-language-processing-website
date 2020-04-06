const AYLIENTextAPI = require('aylien_textapi');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors({
    'credentials': true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const AYLIEN_APP_ID = process.env.AYLIEN_APP_ID;
const AYLIEN_API_KEY = process.env.AYLIEN_API_KEY;


// TODO: completely remove the SDK and just use a raw API request.

const textapi = new AYLIENTextAPI({
    application_id: AYLIEN_APP_ID,
    application_key: AYLIEN_API_KEY
});


let SENTIMENT = '';


function getTextSentiment(text) {
    return textapi.sentiment({
        'text': text
    }, function (error, response) {
        if (error === null) {
            SENTIMENT = response;
            return response;
        }
    });
}


app.post('/send-text', function(req, res) {
    const textSentiment = getTextSentiment(req.body);
    console.log('textSentiment to be returned is: ', textSentiment);
    console.log('SENTIMENT is: ', SENTIMENT);
    // const polarityConfidence = textSentiment.get('polarity_confidence');
    // console.log('polarityConfidence: ', polarityConfidence);
    // const subjectivityConfidence = textSentiment['subjectivity_confidence:'].toString();
    // textSentiment['polarity_confidence'] = polarityConfidence;
    // textSentiment['subjectivity_confidence'] = subjectivityConfidence;
    // console.log('textSentiment is: ', textSentiment);
    // res.send(textSentiment);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
});
