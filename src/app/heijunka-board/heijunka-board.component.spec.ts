import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeijunkaBoardComponent } from './heijunka-board.component';
import {MockHeijunkaBoardService} from '../heijunka-board.service.spec';
import {HeijunkaBoardService} from '../heijunka-board.service';

describe('HeijunkaBoardComponent', () => {
  let component: HeijunkaBoardComponent;
  let fixture: ComponentFixture<HeijunkaBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeijunkaBoardComponent ],
      providers: [
        { provide: HeijunkaBoardService, useClass: MockHeijunkaBoardService }
      ]
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
