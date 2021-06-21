import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { IconsComponent } from './components/icons/icons.component';



@NgModule({
  declarations: [

  
    IconsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [MatIconModule, MatButtonModule,IconsComponent]

})
export class ShareModule { }
