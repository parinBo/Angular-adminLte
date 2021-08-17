import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
declare var $:any
@Component({
  selector: 'app-workshop1',
  templateUrl: './workshop1.component.html',
  styleUrls: ['./workshop1.component.css']
})
export class Workshop1Component implements OnInit {
  userForm=new FormGroup({
    fname:new FormControl(),
    lname:new FormControl(),
    birthDate:new FormControl(),
    age:new FormControl(),
    gender:new FormControl(),
  })
  constructor() { }

  ngOnInit(): void {
  }
  
  showModal(){
    this.userForm.reset()
    $('#addModal').modal('toggle')
  }
  

}
