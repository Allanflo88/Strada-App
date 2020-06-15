import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViabilityPageRoutingModule } from './viability-routing.module';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { ViabilityPage } from './viability.page';
import { HttpClientModule } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {NgxMaskIonicModule} from 'ngx-mask-ionic'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViabilityPageRoutingModule,
    HttpClientModule,
    CurrencyMaskModule,
    NgxMaskIonicModule
  ],
  declarations: [ViabilityPage],
  providers: [Geolocation, CurrencyPipe],

})
export class ViabilityPageModule {}
