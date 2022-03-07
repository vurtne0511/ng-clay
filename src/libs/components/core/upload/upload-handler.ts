import { Observable, of } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';

import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpEventType,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';

import { NcUploadError, NcUploadResponse } from './upload-models';
import { NcUploadRef, NcUploadStatus } from './upload-ref';

const REQUEST_PROGRESS = { reportProgress: true };

export declare type NcUploadEvent<T> = NcUploadResponse<T> | NcUploadError;

export abstract class NcUploadHandler {

  constructor(private _http: HttpClient) { }

  /**
   * 文件上传
   * @param url 上传 url
   * @param uploadRef 上传任务对象
   */
  upload<T>(url: string, uploadRef: NcUploadRef<T>): Observable<NcUploadEvent<T>> {

    const data = this.getRequestData(uploadRef.file);

    return this._http.request<T>(new HttpRequest('POST', url, data, REQUEST_PROGRESS))
      .pipe(
        map(event => this._progress(event, uploadRef)),
        filter(event => event.type === HttpEventType.Response),
        map((event: HttpEvent<T>) =>
          new NcUploadResponse<T>(this.getResponseData((event as HttpResponse<T>).body)),
        ),
        catchError((error: HttpErrorResponse) =>
          of(new NcUploadError(uploadRef.file, this.getErrorMessage(error)))
        )
    );
  }

  /**
   * 处理上传任务的进度
   * @param event 上传事件
   * @param uploadRef 上传任务
   */
  private _progress<T>(event: HttpEvent<any>, uploadRef: NcUploadRef<T>) {

    if (event.type === HttpEventType.Sent) {
      /** 开始 */
      uploadRef.status = NcUploadStatus.BEGIN;
    } else if (event.type === HttpEventType.UploadProgress && (event.total && event.total > 0)) {
      /** 进度更新 */
      uploadRef.progress = Math.round(event.loaded / event.total * 100);
    } else if (event.type === HttpEventType.Response) {
      /** 结束 */
      uploadRef.status = NcUploadStatus.UPLOADED;
    }

    return event;
  }

  /**
   * 获取文件上传数据格式
   * @param file 上传文件
   */
  abstract getRequestData(file: File | Blob): any;

  /**
   * 获取文件上传结束响应数据
   * @param response 响应数据
   */
  abstract getResponseData<T>(body: any): T;

  /**
   * 获取文件上传结束错误数据
   * @param error 错误
   */
  abstract getErrorMessage(error: HttpErrorResponse): any;
}
