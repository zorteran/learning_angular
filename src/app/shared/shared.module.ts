import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './star.component';
import { FormsModule } from '../../../node_modules/@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StartComponent
  ],
  exports:[
    StartComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
