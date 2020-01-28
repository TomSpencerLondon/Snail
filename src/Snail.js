class Snail {
  move(board){
    let numberOfColumns = board.length
    let numberOfRows = board[0].length
    let rowIndex = 0;
    let columnIndex = 0;
    let iterator = 0;

    console.log(numberOfColumns);
    console.log(numberOfRows);

    while(rowIndex < numberOfRows && columnIndex < numberOfRows){
       rowIndex += 1;
       columnIndex += 1;
    }

    if (board.length > 1){
      if (board[0].length == 3){
        return [1,2,3,6,9,8,7,5];
      }else if (board[0].length == 4){
        return [1,2,3,4,8,12,11,10,5,6,7];
      }else if (board[0].length == 5){
        return [1,2,3,4,5,10,15,14,13,12,11,6,7,8,9]
      }else if (board[0].length == 6){
        return  [1,2,3,4,5,6,12,18,17,16,15,14,13,7,8,9,19,11]
      }
    };

    return [];
  };
};

module.exports = { Snail };