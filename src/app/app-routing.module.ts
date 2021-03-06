import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CustomersComponent } from './customers/customers.component';
import { OutletsComponent } from './outlets/outlets.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { GreenCardComponent } from './green-card/green-card.component';
import { MerchantsComponent } from './merchants/merchants.component';
<<<<<<< Updated upstream
import { AuthGuardService as AuthGuard } from './auth-guard.service';
=======
import { WithdrawalRequestComponent } from './withdrawal-request/withdrawal-request.component';
>>>>>>> Stashed changes

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent }
    ]
  },
  {
    path: 'analytics', component: LayoutComponent,
    children: [
      { path: '', component: AnalyticsComponent }
    ]
  },

  {
    path: 'customers', component: LayoutComponent,
    children: [
      { path: '', component: CustomersComponent }
    ]
  },

  {
    path: 'merchants', component: LayoutComponent,
    children: [
      { path: '', component: MerchantsComponent }
    ]
  },
  {
    path: 'withdrawal-request', component: LayoutComponent,
    children: [
      { path: '', component: WithdrawalRequestComponent }
    ]
  },
  {
    path: 'outlets', component: LayoutComponent,
    children: [
      { path: '', component: OutletsComponent }
    ]
  },
  {
    path: 'settings', component: LayoutComponent,
    children: [
      { path: '', component: SettingsComponent }
    ]
  },
  {
    path: 'profile', component: LayoutComponent,
    children: [
      { path: '', component: ProfileComponent }
    ]
  },
  {
    path: 'green-card', component: LayoutComponent,
    children: [
      { path: '', component: GreenCardComponent }
    ]
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
