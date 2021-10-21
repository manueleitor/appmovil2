import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MotivatePageRoutingModule } from './motivate-routing.module';

import { MotivatePage } from './motivate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MotivatePageRoutingModule
  ],
  declarations: [MotivatePage]
})
export class MotivatePageModule {}
