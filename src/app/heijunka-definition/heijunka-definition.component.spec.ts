import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeijunkaDefinitionComponent } from './heijunka-definition.component';

describe('HeijunkaDefinitionComponent', () => {
  let component: HeijunkaDefinitionComponent;
  let fixture: ComponentFixture<HeijunkaDefinitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeijunkaDefinitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeijunkaDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
