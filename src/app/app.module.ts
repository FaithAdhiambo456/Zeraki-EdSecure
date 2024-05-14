import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { SchoolsModule } from './schools/schools.module';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    SchoolsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
