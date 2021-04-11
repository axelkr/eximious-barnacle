/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { IHTTPClient } from 'prime-barnacle';
import { ObjectEventREST } from 'choicest-barnacle';

export class AngularHttpClientFacade implements IHTTPClient {
    private readonly httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    delete(url: string): void {
        this.httpClient.delete(url);
    }

    postJson(url: string, json: ObjectEventREST): void {
        const headers = { 'content-type': 'application/json' };
        this.httpClient.post(url, JSON.stringify(json), { headers }).subscribe();
    }

    get(url: string): Observable<ObjectEventREST> {
        const reporter = new Subject<ObjectEventREST>();
        this.httpClient.get<any[]>(url).subscribe({
            next(allObjects: any[]) {
                allObjects.map(aObject => reporter.next(aObject));
                reporter.complete();
            },
            error(error: any) {
                reporter.error(error);
            }
        });
        return reporter;
    }
}
