import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StepperModule } from './stepper/stepper.module';
import { CreateAudianceModule } from './create-audiance/create-audiance.module';

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
    CreateAudianceModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
