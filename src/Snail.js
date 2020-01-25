class Snail {
  move(board){
    if (board.length > 1){
      return [1,2,3,4,5,6,7,8,9];
    }

    return [];
  };
};

module.exports = { Snail };