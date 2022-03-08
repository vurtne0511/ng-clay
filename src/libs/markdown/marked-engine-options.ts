import { marked } from 'marked';

import { InjectionToken } from '@angular/core';

export const NC_MARKED_DEFAULT_OPTIONS: marked.MarkedOptions = {
  gfm: true,
  breaks: false,
  pedantic: false,
  smartLists: true,
  smartypants: false
};

export const NC_MARKED_OPTIONS = new InjectionToken<marked.MarkedOptions>('nc-marked-options');
