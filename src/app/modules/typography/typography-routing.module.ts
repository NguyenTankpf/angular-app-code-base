import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypographyComponent } from './typography.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'typography',
    pathMatch: 'full'
  },
  {
    path: 'typography',
    component: TypographyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypographyRoutingModule {}
