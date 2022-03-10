import { Subscription } from 'rxjs';

import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Inject,
  InjectionToken,
  Input,
  OnDestroy,
  Output,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { NC_OPTION_PARENC_COMPONENT, NcOptionComponent } from '@ng-clay/components/core';

let _uniqueIdCounter = 0;

export class NcAutocompleteSelectedEvent {
  constructor(
    public source: NcAutocompleteComponent,
    public option: NcOptionComponent) { }
}

export interface NcAutocompleteActivatedEvent {
  source: NcAutocompleteComponent;

  option: NcOptionComponent|null;
}

export interface NcAutocompleteDefaultOptions {
  autoActiveFirstOption?: boolean;
}

export const NC_AUTOCOMPLETE_DEFAULT_OPTIONS =
  new InjectionToken<NcAutocompleteDefaultOptions>('nc-autocomplete-default-options', {
    providedIn: 'root',
    factory: NC_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY,
  });

export function NC_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY(): NcAutocompleteDefaultOptions {
  return { autoActiveFirstOption: false };
}

@Component({
  selector: 'nc-autocomplete',
  templateUrl: 'autocomplete.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'ncAutocomplete',
  host: {
    'class': 'nc-autocomplete'
  },
  providers: [
    { provide: NC_OPTION_PARENC_COMPONENT, useExisting: NcAutocompleteComponent }
  ]
})
export class NcAutocompleteComponent implements AfterContentInit, OnDestroy {

  private _activeOptionChanges = Subscription.EMPTY;

  _keyManager!: ActiveDescendantKeyManager<NcOptionComponent>;

  showPanel: boolean = false;

  _isOpen: boolean = false;

  get isOpen(): boolean { return this._isOpen && this.showPanel; }

  @ViewChild(TemplateRef, { static: true }) template!: TemplateRef<any>;

  @ViewChild('panel') panel!: ElementRef;

  @ContentChildren(NcOptionComponent, { descendants: true }) options!: QueryList<NcOptionComponent>;

  @Input() displayWith: ((value: any) => string) | null = null;

  private _autoActiveFirstOption: boolean;

  @Input()
  get autoActiveFirstOption(): boolean { return this._autoActiveFirstOption; }
  set autoActiveFirstOption(value: BooleanInput) {
    this._autoActiveFirstOption = coerceBooleanProperty(value);
  }

  @Input() panelWidth!: string | number;

  @Output() readonly optionSelected = new EventEmitter<NcAutocompleteSelectedEvent>();

  @Output() readonly opened: EventEmitter<void> = new EventEmitter<void>();

  @Output() readonly closed: EventEmitter<void> = new EventEmitter<void>();

  @Output() readonly optionActivated = new EventEmitter<NcAutocompleteActivatedEvent>();

  @Input('class')
  set classList(value: string) {
    if (value && value.length) {
      this._classList = value.split(' ').reduce((classList, className) => {
        classList[className.trim()] = true;
        return classList;
      }, {} as { [key: string]: boolean });
    } else {
      this._classList = {};
    }

    this._setVisibilityClasses(this._classList);
    this._elementRef.nativeElement.className = '';
  }
  _classList: { [key: string]: boolean } = {};

  id: string = `nc-autocomplete-${_uniqueIdCounter++}`;

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _elementRef: ElementRef<HTMLElement>,
    @Inject(NC_AUTOCOMPLETE_DEFAULT_OPTIONS) defaults: NcAutocompleteDefaultOptions) {

    this._autoActiveFirstOption = !!defaults.autoActiveFirstOption;
  }

  ngAfterContentInit() {
    this._keyManager = new ActiveDescendantKeyManager<NcOptionComponent>(this.options).withWrap();
    this._activeOptionChanges = this._keyManager.change.subscribe(index => {
      this.optionActivated.emit({ source: this, option: this.options.toArray()[index] || null });
    });

    this._setVisibility();
  }

  ngOnDestroy() {
    this._activeOptionChanges.unsubscribe();
  }

  _setScrollTop(scrollTop: number): void {
    if (this.panel) {
      this.panel.nativeElement.scrollTop = scrollTop;
    }
  }

  _getScrollTop(): number {
    return this.panel ? this.panel.nativeElement.scrollTop : 0;
  }

  _setVisibility() {
    this.showPanel = !!this.options.length;
    this._setVisibilityClasses(this._classList);
    this._changeDetectorRef.markForCheck();
  }

  _emitSelectEvent(option: NcOptionComponent): void {
    const event = new NcAutocompleteSelectedEvent(this, option);
    this.optionSelected.emit(event);
  }

  private _setVisibilityClasses(classList: { [key: string]: boolean }) {
    classList['mat-autocomplete-visible'] = this.showPanel;
    classList['mat-autocomplete-hidden'] = !this.showPanel;
  }

  static ngAcceptInputType_autoActiveFirstOption: BooleanInput;
  static ngAcceptInputType_disableRipple: BooleanInput;
}
