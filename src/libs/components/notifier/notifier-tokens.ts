import { InjectionToken } from '@angular/core';

import { NcNotifierConfig, NcNotifierOptions } from './notifier-config';

// tslint:disable variable-name

/**
 * Injection Token for notifier options
 */
export const NC_NOTIFIER_OPTIONS: InjectionToken<NcNotifierOptions>
	= new InjectionToken<NcNotifierOptions>('nc-notifier-options');

/**
 * Injection Token for notifier configuration
 */
export const NC_NOTIFIER_CONFIG: InjectionToken<NcNotifierConfig>
	= new InjectionToken<NcNotifierConfig>('nc-notifier-config');

// tslint:enable variable-name

