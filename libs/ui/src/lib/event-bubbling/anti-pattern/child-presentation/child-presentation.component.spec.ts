import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPresentationComponent } from './child-presentation.component';

describe('ChildPresentationComponent', () => {
  let component: ChildPresentationComponent;
  let fixture: ComponentFixture<ChildPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
