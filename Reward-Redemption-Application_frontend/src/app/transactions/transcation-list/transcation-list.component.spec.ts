import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscationListComponent } from './transcation-list.component';

describe('TranscationListComponent', () => {
  let component: TranscationListComponent;
  let fixture: ComponentFixture<TranscationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranscationListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranscationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
