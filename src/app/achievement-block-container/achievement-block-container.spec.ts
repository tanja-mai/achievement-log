import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementBlockContainer } from './achievement-block-container';

describe('AchievementBlockContainer', () => {
  let component: AchievementBlockContainer;
  let fixture: ComponentFixture<AchievementBlockContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchievementBlockContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchievementBlockContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
