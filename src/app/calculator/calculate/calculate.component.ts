import { Component, Input, Output, EventEmitter} from '@angular/core';
import { CalculatorComponent } from '../calculator.component';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent {

  //@Input() values: CalculatorComponent[] = []

new: CalculatorComponent = {
value1: "",
value2: ""
}


//lanzar un evento de un componente hijo para que lo reciba el padre
@Output() onNewCalculatorComponent: EventEmitter<CalculatorComponent> = new EventEmitter();

getInputs() {
  if(this.new.value1.trim().length === 0 && this.new.value2.trim().length === 0) {
    return;
  }
  console.log(this.new)
  this.onNewCalculatorComponent.emit(this.new)
  // this.new = {
  //   value1:"",
  //   value2:""
  // }

}


}
