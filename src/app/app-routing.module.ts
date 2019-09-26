import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { ItemsDetailsComponent } from './items-details/items-details.component';
import { InvoiceComponent } from './invoice/invoice.component';

const routes: Routes = [
  {path : 'Customer', component:CustomerDetailsComponent},
  {path : 'items',component:ItemsDetailsComponent},
  {path : 'invoice',component:InvoiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
