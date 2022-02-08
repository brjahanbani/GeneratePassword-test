import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'GeneratePassword';

  password: string;
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;
  length: number = 0;

  constructor() {
    this.password = '';
  }

  onButtonClick() {
    const letters = 'asdfghjkqwertyuiopzxcvbnmASDFGHJKLQWERTYUPZXCVBNM';
    const numbers = '123456789';
    const symbols = '~!@#$%^&*()_+-=/][';
    let validChar = '';
    if (this.includeLetters) {
      validChar += letters;
    }
    if (this.includeNumbers) {
      validChar += numbers;
    }
    if (this.includeSymbols) {
      validChar += symbols;
    }
    let generatedPassword = '';
    for (let index = 0; index < this.length; index++) {
      let index = Math.floor(Math.random() * validChar.length);
      generatedPassword += validChar[index];
    }
    this.password = generatedPassword;
  }

  getPasswords() {
    return this.password;
  }

  onChangeLetter() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeNumber() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
}
