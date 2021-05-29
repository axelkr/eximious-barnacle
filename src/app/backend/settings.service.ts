import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }

  public get(key: string): string {
    const result = localStorage.getItem(key);
    if (result === null) {
      throw new Error('unknown key >>' + key + '<<');
    }
    return result;
  }

  public set(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public has(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }

  public remove(key: string) {
    localStorage.removeItem(key);
  }
}
