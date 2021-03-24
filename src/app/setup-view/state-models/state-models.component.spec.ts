import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockObjectStoreBackendService } from '../../backend/object-store-backend.service.spec';
import { ObjectStoreBackendService } from '../../backend/object-store-backend.service';

import { StateModelsComponent } from './state-models.component';
import { MockHeijunkaBoardService } from '../../domain-services/heijunka-board.service.spec';
import { HeijunkaBoardService } from '../../domain-services/heijunka-board.service';

describe('StateModelsComponent', () => {
  let component: StateModelsComponent;
  let fixture: ComponentFixture<StateModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StateModelsComponent],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: HeijunkaBoardService, useClass: MockHeijunkaBoardService },
        { provide: ObjectStoreBackendService, useClass: MockObjectStoreBackendService }
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
