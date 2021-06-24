import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadAddressComponent } from './bad-address.component';

describe('AddressComponent', () => {
  let component: BadAddressComponent;
  let fixture: ComponentFixture<BadAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
