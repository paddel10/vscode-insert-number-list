module.exports = selections => {
    if (!selections || !selections.length) {
        return {};
    }

    let result = {};

    selections.forEach((selection, i) => {
        let line = selection.start.line;
        result[line] = i;
    });

    return result;

    // generate a list with integers starting with 1
    // return selections.from({length: selections.length}, (x, i) => (i + 1));
};