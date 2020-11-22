import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderModule } from './orderModule/order.module';
import { SharedButtonModule } from './sharedModules/sharedButton.module';

import { ConfirmDialogComponent } from './sharedModules/dialogComponents/confirmDialog.component';
import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    SharedButtonModule,
    MatDialogModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    OrderModule
  ],
  providers: [],
  entryComponents: [
    ConfirmDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
