exports.ClozeCard = function(text, cloze) {
  if (text.includes(cloze)) {
    this.fullText = text;
    this.cloze = cloze;
    this.partialText = text.replace(cloze, '...');
  }
  else {
    console.log('Please make sure the full text includes the removed words');
  }
}

exports.ClozeCard.prototype.askQuestion = function () {
  console.log(this.partialText);
};

exports.ClozeCard.prototype.revealAnswer = function () {
  console.log(`${this.cloze}. ${this.fullText}`);
};
