import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardCartComponent } from './reward-cart.component';

describe('RewardCartComponent', () => {
  let component: RewardCartComponent;
  let fixture: ComponentFixture<RewardCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RewardCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RewardCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
