import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'creation-operator',
    loadChildren: () =>
      import('./creation-operators/creation-op.module').then(
        (m) => m.CreationOpModule
      ),
  },
  {
    path: 'join-creation-operator',
    loadChildren: () =>
      import(
        './join-creation-operators/join-creation-operators-routing.module'
      ).then((m) => m.JoinCreationOpRoutingModule),
  },
  {
    path: '',
    redirectTo: 'creation-operator',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
