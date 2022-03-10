import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AbsoluteComponent } from './absolute/absolute.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FixedComponent } from './fixed/fixed.component';
import { RelativeComponent } from './relative/relative.component';
import { StaticComponent } from './static/static.component';

@NgModule({
  declarations: [
    AppComponent,
    StaticComponent,
    RelativeComponent,
    FixedComponent,
    AbsoluteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
