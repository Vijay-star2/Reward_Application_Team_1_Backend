import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardProcessComponent } from './reward-process.component';

describe('RewardProcessComponent', () => {
  let component: RewardProcessComponent;
  let fixture: ComponentFixture<RewardProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RewardProcessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RewardProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
