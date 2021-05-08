import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentPresentationComponent } from './parent-presentation.component';

describe('ParentPresentationComponent', () => {
  let component: ParentPresentationComponent;
  let fixture: ComponentFixture<ParentPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
