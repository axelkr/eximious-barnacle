import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockObjectStoreBackendService } from '../backend/object-store-backend.service.spec';
import { ObjectStoreBackendService } from '../backend/object-store-backend.service';
import { RouterTestingModule } from '@angular/router/testing';

import { SetupViewComponent } from './setup-view.component';
import { MockHeijunkaBoardService } from '../domain-services/heijunka-board.service.spec';
import { HeijunkaBoardService } from '../domain-services/heijunka-board.service';

describe('SetupViewComponent', () => {
  let component: SetupViewComponent;
  let fixture: ComponentFixture<SetupViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetupViewComponent],
      imports: [
        RouterTestingModule, HttpClientTestingModule
      ],
      providers: [
        { provide: HeijunkaBoardService, useClass: MockHeijunkaBoardService },
        { provide: ObjectStoreBackendService, useClass: MockObjectStoreBackendService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
