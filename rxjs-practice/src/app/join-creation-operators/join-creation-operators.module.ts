import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinCreationOperatorsComponent } from './join-creation-operators.component';
import { JoinCreationOpRoutingModule } from './join-creation-operators-routing.module';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';

@NgModule({
  declarations: [JoinCreationOperatorsComponent, CombineLatestComponent],
  imports: [CommonModule, JoinCreationOpRoutingModule],
})
export class JoinCreationOpModule {}
