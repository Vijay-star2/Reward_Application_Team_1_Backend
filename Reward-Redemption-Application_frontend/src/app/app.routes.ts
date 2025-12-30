import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerAddComponent } from './customers/customer-add/customer-add.component';
import { CardAddComponent } from './cards/card-add/card-add.component';
import { CardListComponent } from './cards/card-list/card-list.component';
import { RewardCatalogComponent } from './rewards/reward-catalog/reward-catalog.component';
import { CartComponent } from './rewards/cart/cart.component';



export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'customers', component: CustomerListComponent },
  { path: 'customers/add', component: CustomerAddComponent },
  { path: 'cards/add', component: CardAddComponent },
  { path: 'cards/:customerId', component: CardListComponent },
  { path: 'rewards', component: RewardCatalogComponent },
  { path: 'cart', component: CartComponent }
];