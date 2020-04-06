import './styles/form.scss'

require("regenerator-runtime/runtime");

async function postData(url='http://localhost:3000/send-text', data={}) {
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
     // parses JSON response into native JavaScript objects
    // return await response.json();
    console.log("Response: ", response);
    return response;
}


// const submitButton = document.getElementById("sub-button");
// submitButton.addEventListener('click', async(event) => {

async function handleSubmit(event) {
    event.preventDefault();
    const textBox = document.getElementById("text-box");
    const nlpProcessedData = await postData('http://localhost:3000/send-text', {'text': textBox.value});
    console.log("NLP Processed Data: ", nlpProcessedData);
    console.log("NLP Processed Data JSON: ", nlpProcessedData.json());
    const nlpResponse = document.getElementById("nlp-response");
    nlpResponse.innerText = nlpProcessedData;
}

export {
    handleSubmit
}


