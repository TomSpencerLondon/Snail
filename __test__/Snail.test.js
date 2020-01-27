const { Snail } = require('../src/Snail.js');
describe("Snail", () => {
  describe("move", () => {
    it("[[]] returns array with no numbers", () => {
        snail = new Snail();
        expect(snail.move([[]])).toEqual([]);
      });

    it("[[1,2,3],[4,5,6],[7,8,9]] returns a shell like array", () => {
      snail = new Snail();
      let board = [[1,2,3],[4,5,6],[7,8,9]];
      expect(JSON.stringify(snail.move(board))).toEqual(          // 1
          JSON.stringify([1,2,3,6,9,8,7,5]))
      });

   it("[[1,2,3,4],[5,6,7,8],[9,10,11,12]] returns a shell like array", () => {
     snail = new Snail();
     let board = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
     expect(JSON.stringify(snail.move(board))).toEqual(          // 1
         JSON.stringify([1,2,3,4,8,12,11,10,5,6,7]))
     });

     it("[[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]] returns a shell like array", () => {
      snail = new Snail();
      let board = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]];
      expect(JSON.stringify(snail.move(board))).toEqual(          // 1
          JSON.stringify([1,2,3,4,5,10,15,14,13,12,11,6,7,8,9]))
      });

     it("[[1,2,3,4,5,6],[12,6,7,8],[9,10,11,12]] returns a shell like array", () => {
       snail = new Snail();
       let board = [[1,2,3,4,5,6], [7,8,9,10,11,12], [13,14,15,16,17,18]];
       expect(JSON.stringify(snail.move(board))).toEqual(
         JSON.stringify([1,2,3,4,5,6,12,18,17,16,15,14,13,7,8,9,19,11]))
      });
  });
});
