import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHeaderComponent } from '../main-header/main-header.component';
import {EstimatedAudienceModule} from './estimated-audience/estimated-audience.module';
import { CreateAudienceComponent } from './create-audience.component';
import {CommonModule} from '@angular/common';
import {FormModule} from './form/form.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('CreateAudianceComponent', () => {
  let component: CreateAudienceComponent;
  let fixture: ComponentFixture<CreateAudienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CreateAudienceComponent,
        MainHeaderComponent
      ],
      imports: [
        CommonModule,
        FormModule,
        EstimatedAudienceModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAudienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
