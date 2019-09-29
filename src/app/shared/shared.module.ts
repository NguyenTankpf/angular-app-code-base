import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { CapitalizePipe, PluralPipe, RoundPipe, TimingPipe } from './pipes';
const components: any[] = [
  ConfirmDialogComponent,
  NavbarComponent,
  SidebarComponent
];
const entryComponent: any[] = [ConfirmDialogComponent];
const directives: any[] = [];

const pipes: any[] = [CapitalizePipe, PluralPipe, RoundPipe, TimingPipe];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule
  ],
  declarations: [...components, ...directives, ...pipes],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    NgbModule,
    ...components,
    ...directives,
    ...pipes
  ]
})
export class SharedModule {}
