exports.ClozeCard = function(text, cloze) {
  if (text.includes(cloze)) {
    this.fullText = text;
    this.cloze = cloze;
    this.partialText = text.replace(cloze, '...');
    this.cardtype = "cloze";
  }
  else {
    console.log('please make sure the full text includes the cloze statement');
  }
}
