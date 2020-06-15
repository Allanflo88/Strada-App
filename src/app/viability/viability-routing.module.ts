import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViabilityPage } from './viability.page';

const routes: Routes = [
  {
    path: '',
    component: ViabilityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViabilityPageRoutingModule {}
