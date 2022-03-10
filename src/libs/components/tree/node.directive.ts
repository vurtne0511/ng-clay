import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { CdkNestedTreeNode, CdkTree, CdkTreeNode, CdkTreeNodeDef } from '@angular/cdk/tree';
import {
  AfterContentInit,
  Attribute,
  Directive,
  ElementRef,
  Input,
  IterableDiffers,
  OnDestroy
} from '@angular/core';

@Directive({
  selector: 'nc-tree-node, [nc-tree-node]',
  exportAs: 'ncTreeNode',
  inputs: ['disabled', 'tabIndex', 'role'],
  host: {
    'class': 'nc-tree-node'
  },
  providers: [{ provide: CdkTreeNode, useExisting: NcTreeNodeDirective }]
})
export class NcTreeNodeDirective<T> extends CdkTreeNode<T> {

  private _disabled: boolean = false;

  get disabled() { return this._disabled; }
  set disabled(value: any) { this._disabled = coerceBooleanProperty(value); }

  private _tabIndex: number = 0;

  get tabIndex(): number { return this.disabled ? -1 : this._tabIndex; }
  set tabIndex(value: number) { this._tabIndex = value != null ? value : 0; }

  private _role: 'treeitem' | 'group' = 'treeitem';
  public override get role(): 'treeitem' | 'group' { return this._role; }
  public override set role(value: 'treeitem' | 'group') {
    this._role = value;
  }

  constructor(
    protected override _elementRef: ElementRef,
    protected override _tree: CdkTree<T>,
    @Attribute('tabindex') tabIndex: string) {
    super(_elementRef, _tree);

    this.tabIndex = Number(tabIndex) || 0;
  }
}

@Directive({
  selector: '[ncTreeNodeDef]',
  inputs: [
    'when: ncTreeNodeDefWhen'
  ],
  providers: [{ provide: CdkTreeNodeDef, useExisting: NcTreeNodeDefDirective }]
})
export class NcTreeNodeDefDirective<T> extends CdkTreeNodeDef<T> {
  @Input('ncTreeNode') data!: T;
}

@Directive({
  selector: 'nc-nested-tree-node, [nc-nested-tree-node]',
  exportAs: 'ncNestedTreeNode',
  host: {
    'class': 'nc-nested-tree-node',
  },
  inputs: ['disabled', 'tabIndex'],
  providers: [
    { provide: CdkNestedTreeNode, useExisting: NcNestedTreeNodeDirective },
    { provide: CdkTreeNode, useExisting: NcNestedTreeNodeDirective }
  ]
})
export class NcNestedTreeNodeDirective<T> extends CdkNestedTreeNode<T> implements AfterContentInit, OnDestroy {

  private _disabled: boolean = false;

  get disabled() { return this._disabled; }
  set disabled(value: BooleanInput) {
    this._disabled = coerceBooleanProperty(value);
  }

  private _tabIndex: number = 0;

  get tabIndex(): number { return this.disabled ? -1 : this._tabIndex; }
  set tabIndex(value: number) { this._tabIndex = value != null ? value : 0; }

  @Input('ncNestedTreeNode') node!: T;

  constructor(
    protected override _elementRef: ElementRef,
    protected override _tree: CdkTree<T>,
    protected override _differs: IterableDiffers,
    @Attribute('tabindex') tabIndex: string) {
    super(_elementRef, _tree, _differs);
    this.tabIndex = Number(tabIndex) || 0;
  }

  override ngAfterContentInit() {
    super.ngAfterContentInit();
  }

  override ngOnDestroy() {
    super.ngOnDestroy();
  }
}
