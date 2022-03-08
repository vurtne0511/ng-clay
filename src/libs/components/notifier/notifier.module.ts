import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { NcNotifierAnimation } from './notifier-animation';
import { NcNotifierConfig, NcNotifierOptions } from './notifier-config';
import { NcNotifierContainerComponent } from './notifier-container.component';
import { NcNotifierQueue } from './notifier-queue';
import { NC_NOTIFIER_CONFIG, NC_NOTIFIER_OPTIONS } from './notifier-tokens';
import { NcNotifierComponent } from './notifier.component';
import { NcNotifier } from './notifier.service';

/**
 * Factory for a notifier configuration with custom options
 *
 * Sidenote:
 * Required as Angular AoT compilation cannot handle dynamic functions; see <https://github.com/angular/angular/issues/11262>.
 *
 * @param   options - Custom notifier options
 * @returns - Notifier configuration as result
 */
export function notifierCustomConfigFactory(options: NcNotifierOptions): NcNotifierConfig {
	return new NcNotifierConfig(options);
}

/**
 * Factory for a notifier configuration with default options
 *
 * Sidenote:
 * Required as Angular AoT compilation cannot handle dynamic functions; see <https://github.com/angular/angular/issues/11262>.
 *
 * @returns - Notifier configuration as result
 */
export function notifierDefaultConfigFactory(): NcNotifierConfig {
	return new NcNotifierConfig({});
}

/**
 * Notifier module
 */
@NgModule({
	declarations: [NcNotifierContainerComponent, NcNotifierComponent],
	exports: [NcNotifierContainerComponent],
	imports: [CommonModule],
	providers: [
		NcNotifierAnimation,
		NcNotifier,
		NcNotifierQueue,
		{ provide: NC_NOTIFIER_CONFIG, useFactory: notifierDefaultConfigFactory },
	],
})
export class NcNotifierModule {
	/**
	 * Setup the notifier module with custom providers, in this case with a custom configuration based on the givne options
	 *
	 * @param   [options={}] - Custom notifier options
	 * @returns - Notifier module with custom providers
	 */
	public static withConfig(options: NcNotifierOptions = {}): ModuleWithProviders<NcNotifierModule> {
		return {
			ngModule: NcNotifierModule,
			providers: [
				// Provide the options itself upfront (as we need to inject them as dependencies -- see below)
				{
					provide: NC_NOTIFIER_OPTIONS,
					useValue: options,
				},

				// Provide a custom notifier configuration, based on the given notifier options
				{
					deps: [NC_NOTIFIER_OPTIONS],
					provide: NC_NOTIFIER_CONFIG,
					useFactory: notifierCustomConfigFactory,
				},
			],
		};
	}
}
