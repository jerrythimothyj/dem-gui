import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSummaryCardComponent } from './dashboard-summary-card.component';

describe('DashboardSummaryCardComponent', () => {
  let component: DashboardSummaryCardComponent;
  let fixture: ComponentFixture<DashboardSummaryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSummaryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSummaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
