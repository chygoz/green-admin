import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CustomersComponent } from './customers/customers.component';
import { OutletsComponent } from './outlets/outlets.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { GreenCardComponent } from './green-card/green-card.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MerchantsComponent } from './merchants/merchants.component';
import { AuthGuardService } from './auth-guard.service';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    AnalyticsComponent,
    CustomersComponent,
    OutletsComponent,
    SettingsComponent,
    ProfileComponent,
    GreenCardComponent,
    MerchantsComponent,

  ],
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatMenuModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
