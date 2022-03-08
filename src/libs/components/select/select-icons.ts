import { InjectionToken } from '@angular/core';

export interface NcSelectIcons {
  caret: string;
  clear: string;
}

export const DEFAULT_SELECT_ICONS: NcSelectIcons = {
  caret: 'fa fa-chevron-down',
  clear: 'fa fa-times'
};

export const NC_SELECT_ICONS = new InjectionToken<NcSelectIcons>('nc-select-icons');
