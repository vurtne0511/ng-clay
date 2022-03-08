import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { NcUploadHandler } from '@ng-clay/components/core';

@Injectable()
export class NcNoopUploadHandler extends NcUploadHandler {

  constructor(http: HttpClient) {
    super(http);
  }

  getRequestData(file: File | Blob) { return file; }

  getResponseData<T>(body: any): T { return body; }

  getErrorMessage(error: HttpErrorResponse) { return error.statusText; }
}
