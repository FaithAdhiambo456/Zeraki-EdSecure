import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';

const routes: Routes = [
  {path: "layout",
    loadChildren: () => import("./layout/layout.module").then((m) =>m.LayoutModule)
  },
  {path: "dashboard",
    loadChildren:() => import ("./dashboard/dashboard.module").then((m) => m.DashboardModule)
  },
  {path: "schools",
    loadChildren: () => import("./schools/schools.module").then((m) => m.SchoolsModule)
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
