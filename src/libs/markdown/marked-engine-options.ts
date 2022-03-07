import { marked } from 'marked';

import { InjectionToken } from '@angular/core';

export const NT_MARKED_DEFAULT_OPTIONS: marked.MarkedOptions = {
  gfm: true,
  breaks: false,
  pedantic: false,
  smartLists: true,
  smartypants: false
};

export const NT_MARKED_OPTIONS = new InjectionToken<marked.MarkedOptions>('nt-marked-options');
