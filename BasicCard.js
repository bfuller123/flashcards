exports.BasicCard = function(front, back) {
  this.front = front;
  this.back = back;
  this.cardtype = "basic";
};


// since these are being turned into strings and back, they must keep their function inside main.js than refer back to a protoype
// exports.BasicCard.prototype.askQuestion = function () {
//   console.log(this.front);
// };
//
// exports.BasicCard.prototype.revealAnswer = function () {
//   console.log(this.back);
// };
