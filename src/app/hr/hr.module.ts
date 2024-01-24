import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HRRoutingModule } from './hr-routing.module';
import { PosComponent } from './pos/pos.component';
import { InventoryComponent } from './inventory/inventory.component';


@NgModule({
  declarations: [
    PosComponent,
    InventoryComponent
  ],
  imports: [
    CommonModule,
    HRRoutingModule
  ]
})
export class HRModule { }
