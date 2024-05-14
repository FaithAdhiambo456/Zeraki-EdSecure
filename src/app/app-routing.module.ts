import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './dashboard/login/login.component';
import { AuthGuard } from './config/auth.guard';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: "",
    component: SidebarComponent,
    canActivate: [AuthGuard],
    children: [
  { path: "", redirectTo: "/sidebar", pathMatch: "full" },
  {path: "layout",
    loadChildren: () => import("./layout/layout.module").then((m) =>m.LayoutModule)
  },
  {path: "dashboard",
    loadChildren:() => import ("./dashboard/dashboard.module").then((m) => m.DashboardModule)
  },
  {path: "schools",
    loadChildren: () => import("./schools/schools.module").then((m) => m.SchoolsModule)
  }
]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
