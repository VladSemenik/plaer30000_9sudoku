module.exports = function solveSudoku(matrix) {
  function solved(arr){
    var h = [0,0];
    if(check(arr, h)) return true;
    let row = h[0];
    let col = h[1];

    for(let y = 1; y < 10; y++){
      if(testValue(row, col, y, arr)){
        arr[row][col] = y;
        if(solved(arr)) return arr;
        arr[row][col] = 0;
      }
    }
    return false;
  }

  function testValue(row, col, y, arr){
    return testRow(row, y, arr) && testCol(col, y, arr) && testCell(row, col, y, arr);
  }

  function testRow(row, y, arr){
    for(let j=0; j < 9; j++){
      if(arr[row][j] === y){
        return false;
      } 
    }
    return true;
  }
  
  function testCol(col, y, arr){
    for(let i=0; i < 9; i++){
      if(arr[i][col] === y){
        return false;
      } 
    }
    return true;
  }
  
  function testCell(row, col, y, arr){
    for(let i=(row - row%3); i < (row - row%3)+3; i++){
      for(let j=(col - col%3); j < (col - col%3)+3; j++){
        if(arr[i][j] === y){
          return false;}
      } 
    }
    return true;
  }
  
  function check(arr, h){
    for (let row = 0; row < 9; row++){
        for (let col = 0; col < 9; col++){
            if (arr[row][col] === 0){
                h[0] = row;
                h[1] = col;
                return false;
            }
        }
    }
    return true;
  }
  
  solved(matrix);
  return matrix;
}
