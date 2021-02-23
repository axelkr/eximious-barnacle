/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { IHTTPClient, ObjectEventBackEnd } from 'prime-barnacle';

export class AngularHttpClientFacade implements IHTTPClient {
    private readonly httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    postJson(url: string, json: Record<string, unknown>): void {
        const headers = { 'content-type': 'application/json' };
        this.httpClient.post(url, JSON.stringify(json), { headers }).subscribe();
    }

    get(url: string): Observable<ObjectEventBackEnd> {
        const reporter = new Subject<ObjectEventBackEnd>();
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
