import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { StepperModule } from './stepper/stepper.module';
import { CreateAudienceModule } from './create-audiance/create-audience.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StepperModule,
    CreateAudienceModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
