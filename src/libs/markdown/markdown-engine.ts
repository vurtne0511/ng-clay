import { Observable } from 'rxjs';

import { InjectionToken } from '@angular/core';

export interface NcMarkdownEngine {

  // comple markdown to html
  compile(data: string): Observable<any>;

  // get the content from remote resource
  getContent(path: string): Observable<any>;
}

export const NC_MARKDOWN_ENGINE = new InjectionToken<NcMarkdownEngine>('nc-markdown-engine');
