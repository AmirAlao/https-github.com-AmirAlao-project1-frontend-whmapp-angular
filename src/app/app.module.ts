import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';
import { NewWarehouseComponent } from './new-warehouse/new-warehouse.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WhmapHomeComponent } from './whmap-home/whmap-home.component';
import { UpdateWarehouseComponent } from './update-warehouse/update-warehouse.component';
import { DeleteWarehouseComponent } from './delete-warehouse/delete-warehouse.component';

@NgModule({
  declarations: [
    AppComponent,
    WarehouseListComponent,
    NewWarehouseComponent,
    DashboardComponent,
    WhmapHomeComponent,
    UpdateWarehouseComponent,
    DeleteWarehouseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
