import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { ContactComponent } from './contact/contact.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FooterComponent } from './footer/footer.component';
import { NgxGistModule } from 'ngx-gist/dist/ngx-gist.module';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ImpressumComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    NgxGistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
