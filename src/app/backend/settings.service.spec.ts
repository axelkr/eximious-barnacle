import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SettingsService } from './settings.service';

describe('SettingsService', () => {
  let service: SettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(SettingsService);
  });

  it('round trip: setting an empty array first, returns an empty array', () => {
    const aKey = 'aKey';
    service.setArray(aKey, []);
    expect(service.getArray(aKey).length).toEqual(0);
  });

  it('round trip: setting an array with one string first, returns an array with exactly that string', () => {
    const aKey = 'aKey';
    const aValue = 'aValue';
    service.setArray(aKey, [aValue]);
    expect(service.getArray(aKey).length).toEqual(1);
    expect(service.getArray(aKey)[0]).toEqual(aValue);
  });

  it('round trip: setting an array with two strings first, returns an array with exactly those strings', () => {
    const aKey = 'aKey';
    const aValue = 'aValue';
    const anotherValue = 'anotherValue';
    service.setArray(aKey, [aValue, anotherValue]);
    expect(service.getArray(aKey).length).toEqual(2);
    expect(service.getArray(aKey)[0]).toEqual(aValue);
    expect(service.getArray(aKey)[1]).toEqual(anotherValue);
  });
});
