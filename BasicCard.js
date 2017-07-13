exports.BasicCard = function(front, back) {
  this.front = front;
  this.back = back;
};

exports.BasicCard.prototype.askQuestion = function () {
  console.log(this.front);
};

exports.BasicCard.prototype.revealAnswer = function () {
  console.log(this.back);
};
