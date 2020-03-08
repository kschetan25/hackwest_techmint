import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule, AgmMap, MouseEvent, MapsAPILoader } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC30PiZPb0NcFuMYTGNlrSI0_lYiap7Its'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }