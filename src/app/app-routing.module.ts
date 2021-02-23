import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankTransactionComponent } from './bank-transaction/bank-transaction.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { ViewTransactionsComponent } from './view-transactions/view-transactions.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'welcome', component: WelcomeComponent, canActivate:[RouteGuardService]},
  {path: 'newtransaction', component: BankTransactionComponent, canActivate:[RouteGuardService]},
  {path: 'viewtransactions', component: ViewTransactionsComponent, canActivate:[RouteGuardService]},
  {path: 'logout', component: LogoutComponent, canActivate:[RouteGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
