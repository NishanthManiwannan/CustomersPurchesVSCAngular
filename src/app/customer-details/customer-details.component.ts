import { Component, OnInit } from '@angular/core';
import { AllServicesService } from '../services/all-services.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styles: []
})
export class CustomerDetailsComponent implements OnInit {

  constructor(private service : AllServicesService) { }

  ngOnInit() {
    this.resetForm();
    this.service.refreshList();

  }

  resetForm(form? : NgForm){

    if(form != null){
      form.resetForm();
    }

    this.service.formData = {
      Customer_Id : 0,
      Customer_Name : '',
      Address : '',
      Mobile : null,
      AllowDiscount : null,
      Total_Cradit : null
    }
  }

  onSubmit(form : NgForm){
    this.service.postCustomerDetails(form.value).subscribe(
      res => {
        this.resetForm(form);
      },
      err => {
        console.log(err)
      }
    ) 
 }

 delete(id){
  this.service.deleteCustumer(id)
  .subscribe(
    ref => {
      this.service.refreshList();
    },err => {err})
 }

}
