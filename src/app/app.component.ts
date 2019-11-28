import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Luck";

  attempts = 0;

  guess1 = 0;
  guess2 = 0;
  guess3 = 0;

  message = null;
  guess = [];
  result = null;
  selectedNumber = null;
  guessNumber = null;
  luckyAttempt = 0;
  worngAttempt = 0;

  clickedCard: boolean = false;

  g = null;

  isReady: boolean = false;

  ngOnInit() {
    this.gamePass();
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  nextPass() {
    this.isReady = true;
  }
  onClick(guess) {
    this.guessNumber = guess;
    // console.log("Guess is ->", guess);
    // console.log("GuessNumber is ->", this.guessNumber);
    if (guess === this.selectedNumber) {
      this.luckyAttempt++;
      this.clickedCard = true;
      setTimeout(() => this.gamePass(), 1500);

      //this.gamePass();
    } else {
      this.worngAttempt++;
      this.clickedCard = true;
      setTimeout(() => this.gamePass(), 1500);
    }
    this.attempts++;
    if (this.attempts === 10) {
      this.setResult();
      this.message = "Click below to replay";
    }
  }

  setResult() {
    console.log("Result");
    if (this.luckyAttempt <= 3) this.result = "Bad Luck";
    else if (this.luckyAttempt <= 6) this.result = "Good Luck";
    else this.result = "Excellent Luck";
  }

  gamePass() {
    this.guess = [];
    this.clickedCard = false;
    this.guess.push(this.getRandomInt(0, 100));
    this.guess.push(this.getRandomInt(0, 100));
    this.guess.push(this.getRandomInt(0, 100));

    this.selectedNumber = this.guess[this.getRandomInt(0, 3)];
    this.guess1 = this.guess[0];
    this.guess2 = this.guess[1];
    this.guess3 = this.guess[2];
    // console.log("----------------");
    // console.log("Selected Number is ->" + this.selectedNumber);
    // console.log("Array is ->" + this.guess.toString());
  }

  gameReset() {
    this.message = null;
    this.guess = [];
    this.result = null;
    this.selectedNumber = null;
    this.luckyAttempt = 0;
    this.worngAttempt = 0;
    this.attempts = 0;
    this.gamePass();
  }
}
