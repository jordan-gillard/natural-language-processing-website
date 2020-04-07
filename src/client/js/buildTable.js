function buildTable(nlpProcessedData, element=null) {
    if (element === null) {
        element = document.getElementById("nlp-response");
    }
    for (const [key, value] of Object.entries(nlpProcessedData)) {
        let newTableRow = document.createElement('tr');
        let tableKey = document.createElement('td');
        let tableVal = document.createElement('td');
        tableKey.innerText = key;
        tableVal.innerText = value;
        newTableRow.append(tableKey, tableVal);
        element.appendChild(newTableRow);
    }
    return element;
}

export { buildTable }