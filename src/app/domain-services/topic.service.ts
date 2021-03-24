import { Injectable } from '@angular/core';
import { ObjectStoreBackendService } from '../backend/object-store-backend.service';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private backend: ObjectStoreBackendService) { }
}
