async function handleSubmit(event) {
    event.preventDefault();
    const textBox = document.getElementById("text-box");
    // This is the best I'll come to validating form input, because I'm
    //  using free-text, and not a url.
    if (textBox.value !== ''){
        const nlpProcessedData = await Client.postData('http://localhost:3000/send-text', {'text': textBox.value});
        Client.buildTable(nlpProcessedData);
    }
}

export { handleSubmit }
