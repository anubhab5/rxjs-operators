import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreationOperatorsComponent } from './creation-operators.component';
import { OfOpComponent } from './of-op/of-op.component';
import { FromOpComponent } from './from-op/from-op.component';
import { CreationOpRoutingModule } from './creation-op-routing.module';
import { FromEventComponent } from './from-event/from-event.component';

@NgModule({
  declarations: [CreationOperatorsComponent, OfOpComponent, FromOpComponent, FromEventComponent],
  imports: [CommonModule, CreationOpRoutingModule],
})
export class CreationOpModule {}
