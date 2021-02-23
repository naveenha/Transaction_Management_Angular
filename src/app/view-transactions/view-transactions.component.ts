import { Component, OnInit } from '@angular/core';
import { CustomerJson, TransactionsStorageService } from '../service/transactions-storage.service';

@Component({
  selector: 'app-view-transactions',
  templateUrl: './view-transactions.component.html',
  styleUrls: ['./view-transactions.component.css']
})
export class ViewTransactionsComponent implements OnInit {
  public custTrans: CustomerJson[]
  constructor(public transStorage: TransactionsStorageService) { }

  ngOnInit(): void {
    this.custTrans = this.transStorage.custTrans
  }

}
