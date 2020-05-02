import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// You'll need to import something in order to use it
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // Probably need some module to make http calls
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
