import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home.routing';
import { SharedModule } from '@app/shared/shared.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, HomeRoutingModule],
  exports: [],
  providers: [],
  entryComponents: []
})
export class HomeModule {}
