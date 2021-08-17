import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
declare var $: any
const MY_FORMATS  = {
  parse: {
      dateInput: 'LL'
  },
  display: {
      dateInput: 'DD/MM/YYYY',
      monthYearLabel: 'YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'YYYY'
  }
};
@Component({
  selector: 'app-workshop1',
  templateUrl: './workshop1.component.html',
  styleUrls: ['./workshop1.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class Workshop1Component implements OnInit {
  userForm = new FormGroup({
    fname: new FormControl(),
    lname: new FormControl(),
    birthDate: new FormControl(),
    age: new FormControl(),
    gender: new FormControl(),
  })
  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('th');   
  }

  ngOnInit(): void {
  }

  showModal() {
    this.userForm.reset()
    $('#addModal').modal('toggle')
  }
 
  userFormSubmit(){
    $('#addModal').modal('toggle')
    console.log(this.userForm.get('birthDate')?.value._i.date)
    console.log(this.userForm.get('fname')?.value)
  }


}
