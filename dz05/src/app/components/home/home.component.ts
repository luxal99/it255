import { Component, OnInit } from '@angular/core';

import { Room } from '../../models/Room';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  text=''
  constructor() { }

  listOfRooms: Array<Room> = []

  ngOnInit() {
  }

  addRoom(title:HTMLInputElement){
    
    if (title.value !== '') {
      this.listOfRooms.push({title:title.value})
      console.log(this.listOfRooms);
    
    }
  }
}
