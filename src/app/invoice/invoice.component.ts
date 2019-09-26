import { Component, OnInit } from '@angular/core';
import { AllServicesService } from '../services/all-services.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styles: []
})
export class InvoiceComponent implements OnInit {

  constructor(private service : AllServicesService) { }

  ngOnInit() {
    this.resetForm();
    this.service.refreshItemBarrowedDetails();
    this.service.refreshList();
    this.service.refreshItemDetails();
  }

  resetForm(form? : NgForm){

    if(form != null){
      form.resetForm();
    }

    this.service.formDataItemB = {
      Invoice_Id : 0,
      Customer_Id : null,
      Item_Id : null,
      Quanty : null
    }
  }

  onSubmit(form : NgForm){
    this.service.postItemBorrowd(form.value).subscribe(
      res => {
        this.resetForm(form);
      },
      err => {
        console.log(err)
      }
    ) 
 }
}
