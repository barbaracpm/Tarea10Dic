import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})


export class CalculateComponent {

values = {
  value1: "",
  value2: ""
}

result: number | string = "";



//Prepara los valores introducidos por el usuario para realizar las operaciones
checkValues(): any {
  if(this.values.value1.trim().length !== 0 && this.values.value2.trim().length !== 0) {
    //console.log(this.values);
    //console.log(typeof this.values);
    return {value1: parseInt(this.values.value1), value2:parseInt(this.values.value2)};
  }

  return;

}



sum(): void {

  const values = this.checkValues();

  if (values !== undefined) {

    this.result = values.value1 +  values.value2;
    console.log(this.result);
  }

}

substract(): void {

  const values = this.checkValues();

  if (values !== undefined) {

    this.result = values.value1 -  values.value2;
    console.log(this.result);
  }

}

multiply(): void {

  const values = this.checkValues();

  if (values !== undefined) {

    this.result = values.value1 *  values.value2;
    console.log(this.result);
  }

}


divide(): void {

  const values = this.checkValues();

  if (values !== undefined) {
    this.result = values.value1 /  values.value2;
    console.log(this.result);
  }

}

reset(): void {

  this.values = {
    value1: "",
    value2: ""
  }

}


}
