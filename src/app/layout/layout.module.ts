import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { MainDashboardComponent } from './app-layout/main-dashboard/main-dashboard.component';
import { MainLayoutComponent } from './app-layout/main-layout/main-layout.component';
import { HeaderComponent } from './header/header.component';
import { PageLoaderComponent } from './page-loader/page-loader.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AuthLayoutComponent } from './app-layout/auth-layout/auth-layout.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    PageLoaderComponent,
    RightSidebarComponent,
    SidebarComponent,
    AuthLayoutComponent
  ],

  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
