import { Component, OnInit, Pipe } from '@angular/core';
import { concat } from 'rxjs/operators';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  currentValue = 0;
  operator = '';
  operand1 = 0;
  operand2 = 0;

  constructor() { }

  ngOnInit() {
  }
  assignOperator(value) {
    this.operator = value;
  }
  setOperand1() {
    this.operand1 = this.currentValue;
    this.currentValue = 0;
  }
  setOperand2() {
    this.operand2 = this.currentValue;
  }
  setCurrentValue(value) {
    if (this.currentValue === 0) {
      this.currentValue = value;
     } else {
       const currentValue = this.currentValue.toString().concat(value);
       // tslint:disable-next-line: radix
       this.currentValue = parseInt(currentValue);
    }
  }
  setCurrentValueToDot() {
    if (this.currentValue === 0) {
      const dot = '.';
      const actualValue = this.currentValue.toString().concat(dot);
      // tslint:disable-next-line: radix
      this.currentValue = parseInt(actualValue);
     } else {
       const dott = '.';
       const currentValue = this.currentValue.toString().concat(dott);
       // tslint:disable-next-line: radix
       this.currentValue = parseInt(currentValue);
    }
  }
  allClear() {
    this.currentValue = 0;
  }
  equals() {
    switch (this.operator) {
      case '+': {
        this.currentValue = this.operand1 + this.operand2;
      }         break;
      case '-': {
        this.currentValue = this.operand1 - this.operand2;
      }         break;
      case '*': {
        this.currentValue = this.operand1 * this.operand2;
      }         break;
      case '/': {
        this.currentValue = this.operand1 / this.operand2;
      }         break;
      default: {
        this.currentValue = 0;
      }
    }
  }
}
