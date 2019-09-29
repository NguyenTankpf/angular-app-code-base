import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from '@app/core/guard/no-auth.guard';
import { AuthLayoutComponent } from '@app/layout/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from '@app/layout/content-layout/content-layout.component';
import { PreloadModulesStrategy } from './core/strategies/preload-modules.strategy';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ContentLayoutComponent,
    canActivate: [NoAuthGuard], // Should be replaced with actual auth guard
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('app/modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'about',
        loadChildren: () =>
          import('app/modules/about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'table-list',
        loadChildren: () =>
          import('app/modules/table-list/table-list.module').then(
            m => m.TableListModule
          )
      },
      {
        path: 'table-list',
        loadChildren: () =>
          import('app/modules/contact/contact.module').then(
            m => m.ContactModule
          )
      },
      {
        path: 'icons',
        loadChildren: () =>
          import('app/modules/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'user-profile',
        loadChildren: () =>
          import('app/modules/user-profile/user-profile.module').then(
            m => m.UserProfileModule
          )
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('app/modules/notifications/notifications.module').then(
            m => m.NotificationsModule
          )
      },
      {
        path: 'typography',
        loadChildren: () =>
          import('app/modules/typography/typography.module').then(
            m => m.TypographyModule
          )
      }
    ]
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('app/modules/auth/auth.module').then(m => m.AuthModule)
  },
  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '/auth/login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadModulesStrategy })
  ],
  exports: [RouterModule],
  providers: [PreloadModulesStrategy]
})
export class AppRoutingModule {}
