import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlimentatePageRoutingModule } from './alimentate-routing.module';

import { AlimentatePage } from './alimentate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlimentatePageRoutingModule
  ],
  declarations: [AlimentatePage]
})
export class AlimentatePageModule {}
