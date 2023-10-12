import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloworldComponent } from './components/helloworld/helloworld.component';
import { TestComponent } from './components/test/test.component';
import { HomeComponent } from './views/home/home.component';
import { NavbarcompComponent } from './components/navbarcomp/navbarcomp.component';
import { SliderCompComponent } from './components/slider-comp/slider-comp.component';
import { MycardsComponent } from './components/mycards/mycards.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent,
    TestComponent,
    HomeComponent,
    NavbarcompComponent,
    SliderCompComponent,
    MycardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
