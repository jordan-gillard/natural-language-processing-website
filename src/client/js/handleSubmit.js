async function handleSubmit(event) {
    event.preventDefault();
    const textBox = document.getElementById("text-box");
    const nlpProcessedData = await Client.postData('http://localhost:3000/send-text', {'text': textBox.value});
    const nlpResponse = document.getElementById("nlp-response");
    console.log('nlpProcessedData', nlpProcessedData);
    nlpResponse.innerText = nlpProcessedData;
}

export { handleSubmit }
