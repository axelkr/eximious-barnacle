import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateModelsComponent } from './state-models.component';
import { MockHeijunkaBoardService } from '../../domain-services/heijunka-board.service.spec';
import { HeijunkaBoardService } from '../../domain-services/heijunka-board.service';

describe('StateModelsComponent', () => {
  let component: StateModelsComponent;
  let fixture: ComponentFixture<StateModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StateModelsComponent],
      providers: [
        { provide: HeijunkaBoardService, useClass: MockHeijunkaBoardService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
