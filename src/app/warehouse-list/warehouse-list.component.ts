import { Component, OnInit } from '@angular/core';
import Warehouse from '../models/Warehouse';
import { WarehouseService } from '../warehouse.service';

@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.css']
})
export class WarehouseListComponent implements OnInit {
  example = "Hola Angular";

  constructor(private service: WarehouseService) {
    this.warehouseList=[];
  }
  //Creats and empty arrey object holder to hold the data that is recieved from the front end.
  warehouseList:  Warehouse[]; 
  ngOnInit(): void {
    this.service.findAll().subscribe((data) => {
      this.warehouseList = data;
      console.log(this.warehouseList);
      console.log('-----------');
      console.log(data);
    });
  }

}
