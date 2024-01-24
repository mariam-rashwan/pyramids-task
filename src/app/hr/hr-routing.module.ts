import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PosComponent } from './pos/pos.component';
import { InventoryComponent } from './inventory/inventory.component';

const routes: Routes = [
  {path:'',redirectTo:"pos" ,pathMatch:"full"},
  {path:'pos',component:PosComponent,title:"Hr Position"},
  {path:'inventory',component:InventoryComponent, title:"Hr Inventory"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HRRoutingModule { }
