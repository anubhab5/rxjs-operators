import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinCreationOperatorsComponent } from './join-creation-operators.component';
import { JoinCreationOpRoutingModule } from './join-creation-operators-routing.module';

@NgModule({
  declarations: [JoinCreationOperatorsComponent],
  imports: [CommonModule, JoinCreationOpRoutingModule],
})
export class JoinCreationOpModule {}
