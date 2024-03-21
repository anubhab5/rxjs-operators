import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinCreationOperatorsComponent } from './join-creation-operators.component';

const routes: Routes = [
  {
    path: '',
    component: JoinCreationOperatorsComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JoinCreationOpRoutingModule {}
