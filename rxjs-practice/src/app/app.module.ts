import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreationOpModule } from './creation-operators/creation-op.module';
import { JoinCreationOpModule } from './join-creation-operators/join-creation-operators.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CreationOpModule,
    JoinCreationOpModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
