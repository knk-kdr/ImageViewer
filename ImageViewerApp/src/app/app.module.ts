import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './common/in-memory-data.service';

import { AppComponent } from './app.component';
import { SlideShowComponent } from './slide-show/slide-show.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideShowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
