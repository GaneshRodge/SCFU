import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendorComponent } from './core/components/vendor/vendor.component';
import { DealerComponent } from './core/components/dealer/dealer.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';
import { VendorFinanceComponent } from './core/vendor-finance/vendor-finance.component';
import { DealerFinanceComponent } from './core/dealer-finance/dealer-finance.component';

@NgModule({
  declarations: [
    AppComponent,
    VendorComponent,
    DealerComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    VendorFinanceComponent,
    DealerFinanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
