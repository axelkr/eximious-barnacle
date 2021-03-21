import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { KanbanCardViewComponent } from './kanban-card-view.component';
import { MockHeijunkaBoardService } from '../heijunka-board.service.spec';
import { HeijunkaBoardService } from '../heijunka-board.service';

describe('KanbanCardViewComponent', () => {
  let component: KanbanCardViewComponent;
  let fixture: ComponentFixture<KanbanCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KanbanCardViewComponent],
      imports: [
        RouterTestingModule, HttpClientTestingModule],
      providers: [
        { provide: HeijunkaBoardService, useClass: MockHeijunkaBoardService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
