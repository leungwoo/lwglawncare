import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';

@NgModule({
  declarations: [ServicesComponent],
  exports: [ServicesComponent],
  imports: [CommonModule],
})
export class ServicesModule {}
