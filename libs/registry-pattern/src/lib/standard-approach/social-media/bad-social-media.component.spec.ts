import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadSocialMediaComponent } from './bad-social-media.component';

describe('SocialMediaComponent', () => {
  let component: BadSocialMediaComponent;
  let fixture: ComponentFixture<BadSocialMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadSocialMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
