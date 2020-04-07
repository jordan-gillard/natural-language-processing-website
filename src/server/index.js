const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.use(cors({
    'credentials': true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const AYLIEN_APP_ID = process.env.AYLIEN_APP_ID;
const AYLIEN_API_KEY = process.env.AYLIEN_API_KEY;
const baseAPIUrl = 'https://api.aylien.com/api/v1/sentiment';

async function getTextSentiment(text) {
    console.log("received text to send: ", text);
    const url = baseAPIUrl + '?text=' + text.text;

    const response = await fetch(url,{
        method: 'POST',
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'X-AYLIEN-TextAPI-Application-Key': AYLIEN_API_KEY,
            'X-AYLIEN-TextAPI-Application-ID': AYLIEN_APP_ID
        }
    });
    return await response.json();
}

app.post('/send-text', async function(req, res) {
    const textSentiment = await getTextSentiment(req.body);
    console.log('textSentiment to be returned is: ', textSentiment);
    res.send(textSentiment);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
});
