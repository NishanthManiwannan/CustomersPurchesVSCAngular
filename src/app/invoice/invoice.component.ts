import { Component, OnInit } from '@angular/core';
import { AllServicesService } from '../services/all-services.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styles: []
})
export class InvoiceComponent implements OnInit {

  public discount;
  public discountadded;

  constructor(private service : AllServicesService) { }

  ngOnInit() {
    this.resetForm();
    this.service.refreshItemBarrowedDetails();
    this.service.refreshList();
    this.service.refreshItemDetails();
    this.service.refreshItemBarrowedDetailsTwo();
  }

  
  resetForm(form? : NgForm){

    this.discountadded = '';
    
    if(form != null){
      form.resetForm();
    }

    this.service.formDataItemB = {
      Invoice_Id : 0,
      Customer_Id : null,
      Item_Id : '',
      Quanty : null,
      Price : null
    }

    // this.service.formDateItem2 = {
    //   Invoice_Id : 0,
    //   Customer_Id : null,
    //   Item_Id : null,
    //   Quanty : null,
    //   Price : null
      
    // }


  }

  onSubmit(form : NgForm){
    if(this.service.formDataItemB.Quanty == 1 ){

      this.service.postItemBorrowd(form.value).subscribe(
        res => {
          this.resetForm(form);
        },
        err => {
          console.log(err)
        }
    ) 
    }else{
      this.service.postItemBorrowdTwo(form.value).subscribe(
        res => {
          this.resetForm(form);
        },
        err => {
          console.log(err)
        }
      )
    }
    
 }
 updatePrice(ctrl){
  if(ctrl.selectedIndex == 0){
    this.service.formDataItemB.Price = 0;
  }else{
    this.service.formDataItemB.Price = this.service.listItem[ctrl.selectedIndex - 1].Price;
  }
 }

 updateTotol(){
  this.service.formDataItemB.Price = (this.service.formDataItemB.Quanty * this.service.formDataItemB.Price) - (this.service.formDataItemB.Quanty * this.service.formDataItemB.Price) * this.discount/100;
  this.discountadded = "Discount Added Price 😁"
}

 chechustomer(ctrl){
  this.discount = this.service.list[ctrl.selectedIndex - 1].AllowDiscount;
 }
}
