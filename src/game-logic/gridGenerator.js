function gridGenerator(length) {
    let verticalArray = [];
    let horizontalArray = [];
    for (let i = 0; i < length; i++) {
        horizontalArray.push(0);
    }
    for (let i = 0; i < length; i++) {
        verticalArray[i] = horizontalArray;
    }
    return verticalArray;
}

exports.gridGenerator = gridGenerator;