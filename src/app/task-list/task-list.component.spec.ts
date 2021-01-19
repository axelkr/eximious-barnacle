import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TaskComponent } from '../task/task.component';
import { TaskListComponent } from './task-list.component';
import { TaskAddComponent} from '../task-add/task-add.component';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskListComponent,TaskComponent,TaskAddComponent ],
      imports: [
        FormsModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
