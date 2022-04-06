import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './common/main-header/main-header.component';
import { MainFooterComponent } from './common/main-footer/main-footer.component';
import { MainNavComponent } from './common/main-nav/main-nav.component';
import { HomeComponent } from './inicio/home/home.component';
import { SectionservicioComponent } from './inicio/sectionservicio/sectionservicio.component';
import { AboutComponent } from './inicio/about/about.component';
import { BloqueComponent } from './inicio/bloque/bloque.component';
import { AboutrouteComponent } from './components/aboutroute/aboutroute.component';
import { ServicerouteComponent } from './components/serviceroute/serviceroute.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainFooterComponent,
    MainNavComponent,
    HomeComponent,
    SectionservicioComponent,
    AboutComponent,
    BloqueComponent,
    AboutrouteComponent,
    ServicerouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
