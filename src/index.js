// You should implement your task here.

module.exports = function towelSort(matrix) {
  let sorted_arr = [];
  if (matrix) {
      for (let i = 0; i < matrix.length; i++) {
          if (i % 2) {
              matrix[i].reverse()
          }
          for (let j = 0; j < matrix[i].length; j++) {
              sorted_arr.push(matrix[i][j])
          }
      }
  }
  return sorted_arr
};
