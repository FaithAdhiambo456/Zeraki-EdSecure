import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../Services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  dashboardRoutes!: { path: string; title: string; }[];
  schoolsRoutes!: { path: string; title: string; }[];

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.dashboardRoutes = this.sidebarService.getDashboardRoutes();
    this.schoolsRoutes = this.sidebarService.getSchoolsRoutes();
  }
}
