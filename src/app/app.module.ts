import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './cards/cards.component';
import { Routes, RouterModule } from '@angular/router';
import { GTCardComponent } from './gtcard/gtcard.component';
import { FarmComponent } from './farmcard/farm.component';
import { SmartComponent } from './smartcard/smart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';

const routeConfig : Routes =[
  {path : '', component : CardComponent},
  {path : 'gtcard', component : GTCardComponent},
  {path : 'farmcard', component : FarmComponent},
  {path : 'smartcard', component  : SmartComponent},
  {path : 'admin', component  : AdminComponent  }
];

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, LayoutComponent, FooterComponent, 
    CardComponent, GTCardComponent, FarmComponent, SmartComponent, AdminComponent

  ],
  imports: [
    BrowserModule,    
    RouterModule.forRoot(routeConfig),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
