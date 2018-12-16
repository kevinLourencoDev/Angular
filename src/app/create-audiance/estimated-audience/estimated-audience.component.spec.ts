import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatedAudienceComponent } from './estimated-audience.component';

describe('EstimatedAudienceComponent', () => {
  let component: EstimatedAudienceComponent;
  let fixture: ComponentFixture<EstimatedAudienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimatedAudienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimatedAudienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
