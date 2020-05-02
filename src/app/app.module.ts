import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // Probably need some module to make http calls
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
