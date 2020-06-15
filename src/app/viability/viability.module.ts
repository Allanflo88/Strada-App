import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViabilityPageRoutingModule } from './viability-routing.module';

import { ViabilityPage } from './viability.page';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViabilityPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ViabilityPage],
  providers: [Geolocation]
})
export class ViabilityPageModule {}
