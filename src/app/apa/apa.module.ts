import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { ApaComponent } from './apa.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'apa', component: ApaComponent }]),
      SharedModule
      // CommonModule
  ],
  declarations: [ApaComponent]
})
export class ApaModule { }
