function buildTable(nlpProcessedData) {
    const nlpResponse = document.getElementById("nlp-response");
    for (const [key, value] of Object.entries(nlpProcessedData)) {
        let newTableRow = document.createElement('tr');
        let tableKey = document.createElement('td');
        let tableVal = document.createElement('td');
        tableKey.innerText = key;
        tableVal.innerText = value;
        newTableRow.append(tableKey, tableVal);
        nlpResponse.appendChild(newTableRow);
    }
}

export { buildTable }