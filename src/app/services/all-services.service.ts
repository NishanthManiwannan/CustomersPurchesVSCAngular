import { Injectable } from '@angular/core';
import { CustomersDetails } from './customers-details.model';
import { HttpClient } from '@angular/common/http';
import { ItemsDetails } from './items-details.model';
import { Invoice } from './invoice.model';
import { InvoiceTwo } from './invoice-two.model';

@Injectable({
  providedIn: 'root'
})
export class AllServicesService {

  formData : CustomersDetails;
  formDataItem : ItemsDetails;
  formDataItemB : Invoice;
  formDateItem2 : InvoiceTwo;

  list : CustomersDetails[];
  listItem : ItemsDetails[];
  listInvoice : Invoice[];
  listInvoiceTwo : InvoiceTwo[];


  readonly rootUrl = 'http://localhost:54747/api';

  constructor(private http : HttpClient) { }

  //Customer Details Post and get request
  postCustomerDetails(formData : CustomersDetails){
    return this.http.post(this.rootUrl+'/CustomerDetail',formData)
  }

  refreshList(){
    this.http.get(this.rootUrl+'/CustomerDetail')
      .toPromise()
      .then(res => this.list = res as CustomersDetails[])
  }

  deleteCustumer(id){
    return this.http.delete(this.rootUrl+'/CustomerDetail/'+ id);
  }

  //Items Details Post and get request
  postItemsDetails(formDataItem : ItemsDetails){
    return this.http.post(this.rootUrl+'/ItemsDetail',formDataItem)
  }

  refreshItemDetails(){
    this.http.get(this.rootUrl+'/ItemsDetail')
      .toPromise()
      .then(res => this.listItem = res as ItemsDetails[])
  }

  deleteItems(id){
    return this.http.delete(this.rootUrl+'/ItemsDetail/'+ id);
  }

  //Invoice Details Post and get request
  postItemBorrowd(formDataItemB : Invoice){
    return this.http.post(this.rootUrl+'/Invoice',formDataItemB)
  }

  refreshItemBarrowedDetails(){
    this.http.get(this.rootUrl+'/Invoice')
      .toPromise()
      .then(res => this.listInvoice = res as Invoice[])
  }

  deleteSingle(id){
    return this.http.delete(this.rootUrl+'/Invoice/'+ id);
  }

   //InvoicTwo Details Post and get request
   postItemBorrowdTwo(formDateItem : InvoiceTwo){
    return this.http.post(this.rootUrl+'/InvoicTwo',formDateItem)
  }

  refreshItemBarrowedDetailsTwo(){
    this.http.get(this.rootUrl+'/InvoicTwo')
      .toPromise()
      .then(res => this.listInvoiceTwo = res as InvoiceTwo[])
  }
  
  deleteMulty(id){
    return this.http.delete(this.rootUrl+'/InvoicTwo/'+ id);
  }
}
