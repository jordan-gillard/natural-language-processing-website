import {buildTable} from "../src/client";

test('tests send dict to buildTable builds table rows', () => {
    const data = {
        'polarity': 'neutral',
    };
    const testElement = document.createElement('table');
    expect(buildTable(data, testElement).innerHTML).toBe("<tr><td></td><td></td></tr>");
});