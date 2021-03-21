import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeijunkaBoardViewComponent } from './heijunka-board-view.component';
import { MockHeijunkaBoardService } from '../heijunka-board.service.spec';
import { HeijunkaBoardService } from '../heijunka-board.service';

describe('HeijunkaBoardViewComponent', () => {
  let component: HeijunkaBoardViewComponent;
  let fixture: ComponentFixture<HeijunkaBoardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeijunkaBoardViewComponent],
      providers: [
        { provide: HeijunkaBoardService, useClass: MockHeijunkaBoardService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeijunkaBoardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
