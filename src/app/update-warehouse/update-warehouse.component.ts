import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import Warehouse from '../models/Warehouse';
import { WarehouseService } from '../warehouse.service';

@Component({
  selector: 'app-update-warehouse',
  templateUrl: './update-warehouse.component.html',
  styleUrls: ['./update-warehouse.component.css']
})
export class UpdateWarehouseComponent implements OnChanges {

  warehouseToUpdate: Warehouse = new Warehouse();
  constructor(private service: WarehouseService) { }

 
  update(): void {
    this.service.save(this.warehouseToUpdate).subscribe(data =>{
      console.log(data);
    });
  }

    ngOnChanges(changes: SimpleChanges): void {
      throw new Error('Method not implemented.');

}
  }
