import { Injectable } from '@angular/core';
import { CustomersDetails } from './customers-details.model';
import { HttpClient } from '@angular/common/http';
import { ItemsDetails } from './items-details.model';
import { Invoice } from './invoice.model';

@Injectable({
  providedIn: 'root'
})
export class AllServicesService {

  formData : CustomersDetails;
  formDataItem : ItemsDetails;
  formDataItemB : Invoice;


  list : CustomersDetails[];
  listItem : ItemsDetails[];
  listInvoice : Invoice[];

  readonly rootUrl = 'http://localhost:54747/api';

  constructor(private http : HttpClient) { }

  postCustomerDetails(formData : CustomersDetails){
    return this.http.post(this.rootUrl+'/CustomerDetail',formData)
  }

  refreshList(){
    this.http.get(this.rootUrl+'/CustomerDetail')
      .toPromise()
      .then(res => this.list = res as CustomersDetails[])
  }

  postItemsDetails(formDataItem : ItemsDetails){
    return this.http.post(this.rootUrl+'/ItemsDetail',formDataItem)
  }

  refreshItemDetails(){
    this.http.get(this.rootUrl+'/ItemsDetail')
      .toPromise()
      .then(res => this.listItem = res as ItemsDetails[])
  }

  postItemBorrowd(formDataItemB : Invoice){
    return this.http.post(this.rootUrl+'/Invoice',formDataItemB)
  }

  refreshItemBarrowedDetails(){
    this.http.get(this.rootUrl+'/Invoice')
      .toPromise()
      .then(res => this.listInvoice = res as Invoice[])
  }
}
