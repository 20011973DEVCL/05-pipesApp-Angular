import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

// Configuracion del Locale de la App
import localeEsCL from '@angular/common/locales/es-CL'
import localeEsFR from '@angular/common/locales/fr-CA'

import {registerLocaleData} from '@angular/common'

registerLocaleData(localeEsCL);
registerLocaleData(localeEsFR);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue:'es-CL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
