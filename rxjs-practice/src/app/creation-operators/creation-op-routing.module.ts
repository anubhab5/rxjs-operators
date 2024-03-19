import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfOpComponent } from './of-op/of-op.component';
import { FromOpComponent } from './from-op/from-op.component';
import { CreationOperatorsComponent } from './creation-operators.component';

const routes: Routes = [
  {
    path: '',
    component: CreationOperatorsComponent,
    children: [
      {
        path: 'of-op',
        component: OfOpComponent,
      },
      {
        path: 'from-op',
        component: FromOpComponent,
      },
      {
        path: '',
        redirectTo: 'of-op',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreationOpRoutingModule {}
