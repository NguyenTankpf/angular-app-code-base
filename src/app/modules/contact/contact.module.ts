import { NgModule } from '@angular/core';
import { ContactRoutes } from './contact-routing.module';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [ContactRoutes, SharedModule]
})
export class ContactModule {}
