import { Component, OnInit, Output, EventEmitter } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Hệ Thống',
    icon: 'dashboard',
    class: ''
  },
  {
    path: '/user-profile',
    title: 'Quản lý nhân viên',
    icon: 'group',
    class: ''
  },
  {
    path: '/table-list',
    title: 'DATA KH',
    icon: 'recent_actors',
    class: ''
  },
  {
    path: '/typography',
    title: 'Hợp Đồng',
    icon: 'contacts',
    class: ''
  },
  {
    path: '/icons',
    title: 'EMS - Bưu Điện',
    icon: 'local_post_office',
    class: ''
  },
  {
    path: '/notifications',
    title: 'Thu - Chi',
    icon: 'local_atm',
    class: ''
  },
  {
    path: '/notifications',
    title: 'Tổng Đài',
    icon: 'local_phone',
    class: ''
  },
  {
    path: '/notifications',
    title: 'Báo Cáo -  Biểu Đồ',
    icon: 'timeline',
    class: ''
  },
  {
    path: '/notifications',
    title: 'Tài Liệu',
    icon: 'folder_open',
    class: ''
  }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  expand = true;
  @Output() OnMenuToggle: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  toggleMenu() {
    this.expand = !this.expand;
    this.OnMenuToggle.emit(this.expand);
  }
}
