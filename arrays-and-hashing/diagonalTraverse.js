// /**
//  * @param {number[][]} mat
//  * @return {number[]}
//  */
// function findDiagonalOrder(mat) {
//   const rows = mat.length;
//   const cols = mat[0].length;

//   const diagonalsMap = new Map();

//   for (let r = 0; r < rows; r++) {
//     for (let c = 0; c < cols; c++) {
//       const diagonal = rows - 1 - r - c;
//       if (!diagonalsMap.has(diagonal)) {
//         diagonalsMap.set(diagonal, []);
//       }

//       const nums = diagonalsMap.get(diagonal);
//       nums.push(mat[r][c]);
//     }
//   }

//   const result = [];
//   let direction = 0;
//   for (const array of diagonalsMap.values()) {
//     if (direction % 2 === 0) {
//       for (let i = array.length - 1; i >= 0; i--) result.push(array[i]);
//     } else {
//       for (let i = 0; i < array.length; i++) result.push(array[i]);
//     }

//     direction++;
//   }

//   return result;
// }
