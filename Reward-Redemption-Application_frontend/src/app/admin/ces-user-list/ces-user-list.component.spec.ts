import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CesUserListComponent } from './ces-user-list.component';

describe('CesUserListComponent', () => {
  let component: CesUserListComponent;
  let fixture: ComponentFixture<CesUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CesUserListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CesUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
