import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreationOperatorsComponent } from './creation-operators.component';
import { OfOpComponent } from './of-op/of-op.component';
import { FromOpComponent } from './from-op/from-op.component';
import { CreationOpRoutingModule } from './creation-op-routing.module';

@NgModule({
  declarations: [CreationOperatorsComponent, OfOpComponent, FromOpComponent],
  imports: [CommonModule, CreationOpRoutingModule],
})
export class CreationOpModule {}
