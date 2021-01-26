import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeijunkaBoardComponent } from './heijunka-board.component';

describe('HeijunkaBoardComponent', () => {
  let component: HeijunkaBoardComponent;
  let fixture: ComponentFixture<HeijunkaBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeijunkaBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeijunkaBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
