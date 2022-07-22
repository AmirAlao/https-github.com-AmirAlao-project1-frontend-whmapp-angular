import { Component, OnInit } from '@angular/core';
import Warehouse from '../models/Warehouse';
import { WarehouseService } from '../warehouse.service';

@Component({
  selector: 'app-delete-warehouse',
  templateUrl: './delete-warehouse.component.html',
  styleUrls: ['./delete-warehouse.component.css']
})
export class DeleteWarehouseComponent implements OnInit {
  //Creating an obkect and calling the service for this componentt
  warehouseToDelete: Warehouse = new Warehouse();
  constructor(private service: WarehouseService) { }

//method that is used to delete and log data
delete(): void{
  this.service.save(this.warehouseToDelete).subscribe(data =>{
    console.log(data);
  });
}
  ngOnInit(): void {
   
  }

}

