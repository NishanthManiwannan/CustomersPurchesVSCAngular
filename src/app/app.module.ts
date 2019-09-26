import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { ItemsDetailsComponent } from './items-details/items-details.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceListComponent } from './Invoice/invoice-list/invoice-list.component';
import { AllServicesService } from './services/all-services.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    ItemsDetailsComponent,
    InvoiceComponent,
    InvoiceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AllServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
