import { Injectable } from '@angular/core';
import { Router, Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(private router: Router) { }

  getDashboardRoutes(): { path: string, title: string }[] {
    // Get routes for the Dashboard module
    return this.getModuleRoutes('dashboard');
  }

  getSchoolsRoutes(): { path: string, title: string }[] {
    // Get routes for the Schools module
    return this.getModuleRoutes('schools');
  }

  private getModuleRoutes(moduleName: string): { path: string, title: string }[] {
    const routes: { path: string, title: string }[] = [];
    this.router.config.forEach((route: Route) => {
      if (route.path && route.path.startsWith(moduleName)) {
        routes.push({ path: '/' + route.path, title: route.data && route.data['title'] ? route.data['title'] : route.path });
      }
    });
    return routes;
  }
}
