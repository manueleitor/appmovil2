import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EjercitatePageRoutingModule } from './ejercitate-routing.module';

import { EjercitatePage } from './ejercitate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EjercitatePageRoutingModule
  ],
  declarations: [EjercitatePage]
})
export class EjercitatePageModule {}
