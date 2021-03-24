import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockObjectStoreBackendService } from '../backend/object-store-backend.service.spec';
import { ObjectStoreBackendService } from '../backend/object-store-backend.service';

import { HeijunkaBoardViewComponent } from './heijunka-board-view.component';
import { MockHeijunkaBoardService } from '../domain-services/heijunka-board.service.spec';
import { HeijunkaBoardService } from '../domain-services/heijunka-board.service';

describe('HeijunkaBoardViewComponent', () => {
  let component: HeijunkaBoardViewComponent;
  let fixture: ComponentFixture<HeijunkaBoardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeijunkaBoardViewComponent],
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
    fixture = TestBed.createComponent(HeijunkaBoardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
