import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AppConfig } from './app.config';

describe('AppComponent', () => {
  beforeAll(()=>{
    AppConfig.settings = {
      backend : {
        url: 'http://testURL',
        port: '800'
      },
      title : 'title',
      env: {
        name:'test'
      }
    };
  });

  afterAll(()=>{
    AppConfig.settings = undefined;
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [AppConfig]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
