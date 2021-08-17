import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  pathName:string = $(location).attr('pathname')
  constructor() { }

  ngOnInit(): void {
    var splitPathName = this.pathName.split('/')
    if(splitPathName[1]=="workshops"){
      $($('#menuItem')[0].childNodes[splitPathName[2]].childNodes[0]).addClass('active')
    }
  }

}
