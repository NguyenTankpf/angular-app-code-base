import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Hệ Thống', icon: '', class: '' },
  {
    path: '/user-profile',
    title: 'Quản lý nhân viên',
    icon: '',
    class: ''
  },
  { path: '/table-list', title: 'DATA KH', icon: '', class: '' },
  { path: '/typography', title: 'Hợp Đồng', icon: '', class: '' },
  { path: '/icons', title: 'EMS - Bưu Điện', icon: '', class: '' },
  { path: '/notifications', title: 'Thu - Chi', icon: '', class: '' },
  { path: '/notifications', title: 'Tổng Đài', icon: '', class: '' },
  {
    path: '/notifications',
    title: 'Báo Cáo -  Biểu Đồ',
    icon: '',
    class: ''
  },
  { path: '/notifications', title: 'Tài Liệu', icon: '', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
