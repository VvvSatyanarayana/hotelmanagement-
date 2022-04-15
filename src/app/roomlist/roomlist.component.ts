import { Component, OnInit } from '@angular/core';
import { RserviceService } from '../rservice.service';

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.css']
})
export class RoomlistComponent implements OnInit {

  rooms:any=[];
  constructor(private service:RserviceService) { }

  ngOnInit() {
    this.service.getData().subscribe(data=>{
      this.rooms=data;
    })
  }

}