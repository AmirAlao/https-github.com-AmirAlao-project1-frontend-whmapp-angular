import { Component, OnInit } from '@angular/core';
import Warehouse from '../models/Warehouse';
import { WarehouseService } from '../warehouse.service';

@Component({
  selector: 'app-new-warehouse',
  templateUrl: './new-warehouse.component.html',
  styleUrls: ['./new-warehouse.component.css']
})
export class NewWarehouseComponent implements OnInit {
// creating Warehouse object
  warehouseToSave: Warehouse = new Warehouse();
  constructor(private service: WarehouseService) { }
  //calling a method to save date to front end
  save(): void {
    this.service.save(this.warehouseToSave).subscribe(data =>{
      console.log(data);
    });
  }

  ngOnInit(): void {
  }

}
