import { Component, OnInit } from '@angular/core';
import { AllServicesService } from '../services/all-services.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-items-details',
  templateUrl: './items-details.component.html',
  styles: []
})
export class ItemsDetailsComponent implements OnInit {

  constructor(private service : AllServicesService) { }

  ngOnInit() {
    this.resetForm();
    this.service.refreshItemDetails();
  }

  resetForm(form? : NgForm){

    if(form != null){
      form.resetForm();
    }

    this.service.formDataItem = {
      Item_Id : 0,
      ItemName : '',
      Brand : '',
      Cost : null,
      Price : null
    }
  }

  onSubmit(form : NgForm){
    this.service.postItemsDetails(form.value).subscribe(
      res => {
        this.resetForm(form);
      },
      err => {
        console.log(err)
      }
    ) 
 }

}
