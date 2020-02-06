class Snail {
  move(board){
   var results = [];
 
    while (board.length > 0) {
        results = results.concat(board.shift());
        board.forEach(function (current) {
            results.push(current.pop());
        });
 
        board.forEach(function (current) {
            current.reverse();
        });
        board.reverse();
    }
 
    return results;
  };
};

module.exports = { Snail };