var textFront = process.argv[2];
var textBack = process.argv[3];
var textFull = process.argv[2];
var textClozed = process.argv[3];


basicCard = function (front, back) {
	this.front = front;
	this.back = back;
}

ClozeCard = function (text, cloze) {
	this.text = text;
	this.cloze = cloze;
	this.partialText = this.text.replace(this.cloze, "...");
	this.clozedText = this.cloze;
	this.fullText = this.text;
	this.brokenCloze = function (){
		if (this.text.indexOf(this.cloze) >= 0) {
			return true;
			console.log("This card works");
		} else {
			console.log(this.cloze + "does not appear in the text")
		}
	}
}

var question1 = new basicCard("Who was the first president", "George Washington");
var question2 = new ClozeCard("George Washington was the first president", "George Washington");
