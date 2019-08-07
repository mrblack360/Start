import { Component, OnInit, Pipe } from '@angular/core';
import { concat } from 'rxjs/operators';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  currentValue = '0';
  operator = '';
  operand1 = 0;
  operand2 = 0;

  constructor() { }

  ngOnInit() {
  }
  assignOperator(value) {
    this.operator = value;
    this.operand1 = parseFloat(this.currentValue);
    this.currentValue = '0';
  }

  setCurrentValue(value) {
    if (this.currentValue === '0') {
      this.currentValue = value.toString();
     } else {
       this.currentValue = this.currentValue.concat(value);
    }
  }
  setCurrentValueToDot() {
    if (this.currentValue === '0') {
      const dot = '.';
      this.currentValue = this.currentValue.toString().concat(dot);
     } else {
       const dott = '.';
       this.currentValue = this.currentValue.toString().concat(dott);
    }
  }
  allClear() {
    this.currentValue = '0';
  }
  equals() {
    this.operand2 = parseFloat(this.currentValue);
    switch (this.operator) {
      case '+': {
        this.currentValue = (this.operand1 + this.operand2).toString();
      }         break;
      case '-': {
        this.currentValue = (this.operand1 - this.operand2).toString();
      }         break;
      case '*': {
        this.currentValue = (this.operand1 * this.operand2).toString();
      }         break;
      case '/': {
        this.currentValue = (this.operand1 / this.operand2).toString();
      }         break;
      default: {
        this.currentValue = 'Math Error';
      }
    }
  }
}
