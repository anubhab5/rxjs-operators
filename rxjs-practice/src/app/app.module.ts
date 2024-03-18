import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component2Component } from './component-2/component-2.component';
import { CreationOperatorsComponent } from './creation-operators/creation-operators.component';
import { JoinCreationOperatorsComponent } from './join-creation-operators/join-creation-operators.component';

@NgModule({
  declarations: [AppComponent, Component2Component, CreationOperatorsComponent, JoinCreationOperatorsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
