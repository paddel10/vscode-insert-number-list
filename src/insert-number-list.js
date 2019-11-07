const generateIntegerList = require('./generate-integer-list.js');

const main = vscode => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
        const selections = editor.selections;
        if (selections) {
            const integerList = generateIntegerList(selections);
            editor.edit(builder => {
                selections.forEach((selection, i) => {
                    let line = selection.start.line;
                    builder.insert(selection.start, integerList[line].toString());
                });
              });
        } else {
            vscode.window.showErrorMessage('no selections available');
        }
    } else {
		vscode.window.showErrorMessage('no active editor available');
    }
}

module.exports = main;