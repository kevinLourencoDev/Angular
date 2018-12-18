import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material';

import { TreeSelectModule } from '../../tree-select/tree-select.module';
import {MatSelectModule} from '@angular/material/select';

import { FormComponent } from './form.component';
import {CommonModule} from '@angular/common';


describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatSelectModule,
        TreeSelectModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
