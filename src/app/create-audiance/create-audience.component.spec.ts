import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAudienceComponent } from './create-audience.component';

describe('CreateAudianceComponent', () => {
  let component: CreateAudienceComponent;
  let fixture: ComponentFixture<CreateAudienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAudienceComponent ]
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
