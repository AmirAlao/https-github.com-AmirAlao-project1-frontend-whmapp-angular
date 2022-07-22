import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteWarehouseComponent } from './delete-warehouse/delete-warehouse.component';
import { NewWarehouseComponent } from './new-warehouse/new-warehouse.component';
import { UpdateWarehouseComponent } from './update-warehouse/update-warehouse.component';
import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';

const routes: Routes = [
  {
    path: 'add', component: NewWarehouseComponent
  }, {
    path: 'list', component: WarehouseListComponent
  },{
    path: 'back',  component: DashboardComponent 
  },{
    path: 'update', component: UpdateWarehouseComponent
  },{
    path: 'delete', component: DeleteWarehouseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
