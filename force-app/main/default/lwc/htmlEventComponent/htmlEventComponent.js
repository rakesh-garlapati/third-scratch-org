import { LightningElement } from 'lwc';

export default class HtmlEventComponent extends LightningElement {
    value = 'rakesh';
    handleChange(){
        alert('the content in the search box is modified');
    }
    handleonClick(){
        alert('click me button clicked');
    }
    getbuttonresults(event){
        const  buttonlabel = event.target.label;
        const buttonName = event.target.name ;
        alert('you clicked on the '+ buttonlabel + 'and its name is '+ buttonName);
    }
}