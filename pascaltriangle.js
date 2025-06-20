console.log('hello world');
/**
 * 
 * @param {number} rowIndex 
 * @return {number[]}
 */

var getRow = function(rowIndex) {
    const triangle = []
    for (let i = 0; i <= rowIndex; i++) {
        const row = new Array(i + 1).fill(1)
        for (let j = 1; j < i; j++){
            row[j] = triangle[i-1][j-1] + triangle[i-1][j]
        }
        triangle.push(row);
    }
    return triangle[rowIndex];
}

console.log(getRow(3)); // Output: [1, 3, 3, 1]