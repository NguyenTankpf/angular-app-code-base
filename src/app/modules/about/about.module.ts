import { NgModule } from '@angular/core';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './page/about/about.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [AboutComponent],
  imports: [AboutRoutingModule, SharedModule]
})
export class AboutModule {}
