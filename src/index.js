// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix) return [];
  let array = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 !== 0) {
      let matrixSort = matrix[i].sort((a, b) => b - a);
      array = array.concat(matrixSort);
    } else {
      array = array.concat(matrix[i]);
    }
  }
  return array;
};
