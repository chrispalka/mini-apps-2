/* eslint-disable no-console */
const boardBuilder = (size) => {
  const matrix = [];
  for (let row = 0; row <= size; row += 1) {
    matrix[row] = Array(size).fill(0);
  }
  return matrix;
};

export default boardBuilder;
