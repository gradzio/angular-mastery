import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadPersonalDataComponent } from './bad-personal-data.component';

describe('PersonalDataComponent', () => {
  let component: BadPersonalDataComponent;
  let fixture: ComponentFixture<BadPersonalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadPersonalDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadPersonalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
