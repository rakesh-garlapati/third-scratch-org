import { LightningElement } from 'lwc';

export default class BasicCalculatorComponent extends LightningElement {
   fname ;
   lname;
   oresult;
    
    handlecal(event){
        const labelvalue = event.target.label ;
      if(labelvalue === 'addition'){
        oresult = this.fname + this.lname;

      }
      else if(labelvalue === 'subtraction'){
        oresult = this.fname - this.lname;

      }else if(labelvalue === 'multiplication'){
        oresult = this.fname * this.lname;

      }
    }
}