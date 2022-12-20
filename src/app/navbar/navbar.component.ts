import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  style:any;
  toggle : boolean = false;
  constructor() { }
  toggleStyle(){
    if(this.toggle===false){
      this.style = {display : "block"};
      this.toggle = true;
    }else{
      this.style = {display : "none"};
      this.toggle = false;
    }
  }
  ngOnInit(): void {
  }

}
