import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinCreationOperatorsComponent } from './join-creation-operators.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';

const routes: Routes = [
  {
    path: '',
    component: JoinCreationOperatorsComponent,
    children: [
      {
        path: 'combineLatest',
        component: CombineLatestComponent,
      },
      {
        path: '',
        redirectTo: 'combineLatest',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JoinCreationOpRoutingModule {}
