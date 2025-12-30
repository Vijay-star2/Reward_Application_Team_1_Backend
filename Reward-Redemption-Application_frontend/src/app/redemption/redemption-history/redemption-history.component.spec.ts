import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedemptionHistoryComponent } from './redemption-history.component';

describe('RedemptionHistoryComponent', () => {
  let component: RedemptionHistoryComponent;
  let fixture: ComponentFixture<RedemptionHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedemptionHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedemptionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
