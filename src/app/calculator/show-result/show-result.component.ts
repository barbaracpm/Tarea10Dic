import { Component, Input } from '@angular/core';
import { CalculatorComponent } from '../calculator.component';

@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.css']
})
export class ShowResultComponent {

 @Input() new:CalculatorComponent = { value1: "", value2: ""};

}
