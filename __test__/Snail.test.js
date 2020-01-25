const { Snail } = require('../src/Snail.js');
describe("Snail", () => {
  describe("move", () => {
    it("[[]] returns array with no numbers", () => {
        snail = new Snail();
        expect(snail.move([[]])).toEqual([]);
    });

    it("[[1,2,3],[4,5,6],[7,8,9]] returns array of consecutive numbers", () => {
      snail = new Snail();
      let board = [[1,2,3],[4,5,6],[7,8,9]];
      expect(JSON.stringify(snail.move(board))).toEqual(          // 1
          JSON.stringify([1,2,3,4,5,6,7,8,9])
          );
  });
  });
});