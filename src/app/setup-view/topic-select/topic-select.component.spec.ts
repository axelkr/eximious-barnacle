import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TopicSelectComponent } from './topic-select.component';
import { MockHeijunkaBoardService } from '../../domain-services/heijunka-board.service.spec';
import { HeijunkaBoardService } from '../../domain-services/heijunka-board.service';

describe('TopicSelectComponent', () => {
  let component: TopicSelectComponent;
  let fixture: ComponentFixture<TopicSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopicSelectComponent],
      imports: [
        FormsModule]
      ,
      providers: [
        { provide: HeijunkaBoardService, useClass: MockHeijunkaBoardService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
