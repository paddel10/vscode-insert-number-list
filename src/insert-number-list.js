
const main = vscode => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
        const selections = editor.selections;
        if (selections) {
            editor.edit(builder => {
                selections.forEach((selection, i) => {
                    builder.insert(selection.active, (i + 1).toString());
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