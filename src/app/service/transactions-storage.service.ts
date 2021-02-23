import { Injectable } from '@angular/core';

export class CustomerJson {
  constructor(public custNum: number, public reference: string, public custName: string, public custAddress: string,
    public custPhoneNum: number, public transferAmount: number, public transferCurrency: string, public beneficiaryBank: string,
    public beneficiaryAccountNumber: number, public paymentDetails: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class TransactionsStorageService {
  public custTrans= [
    new CustomerJson(101, 'CUS202102201', 'Customer1', 'Address1', 123456, 1000, 'AED', 'HDFC', 1000, 'NEFT'),
    new CustomerJson(102, 'CUS202102212', 'Customer2', 'Address2', 234567, 2000, 'EUR', 'ICICI', 1001, 'RTGS'),
    new CustomerJson(103, 'CUS202102223', 'Customer3', 'Address3', 345678, 3000, 'CHF', 'SBI', 1002, 'UPI')
  ]
  constructor() { }


}
