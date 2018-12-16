import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAudianceComponent } from './create-audiance.component';

describe('CreateAudianceComponent', () => {
  let component: CreateAudianceComponent;
  let fixture: ComponentFixture<CreateAudianceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAudianceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAudianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
