import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerJson, TransactionsStorageService } from '../service/transactions-storage.service';

@Component({
  selector: 'app-bank-transaction',
  templateUrl: './bank-transaction.component.html',
  styleUrls: ['./bank-transaction.component.css']
})
export class BankTransactionComponent implements OnInit {

  custJson: CustomerJson
  date: string

  constructor(private router: Router, private transStorage: TransactionsStorageService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.date = this.datePipe.transform(new Date(),"yyyyMMdd")
    this.custJson = new CustomerJson(null, 'CUS'+this.date, '', '', null, null, '', '', null, '')
  }

  saveTransaction() {
    this.transStorage.custTrans.push(this.custJson)
    this.router.navigate(['/welcome'])
  }

  fetchCustDetails() {
    let arr = this.transStorage.custTrans
    // let custNumFound = false
    for(var val of arr) {
      if(val.custNum === this.custJson.custNum) {
        this.custJson = val
        // custNumFound = true
        break
      }
    }
    // if(custNumFound === false) {
    //   this.custJson = new CustomerJson(null, 'CUS', '', '', null, null, '', '', null, '')
    // }
  }

}
