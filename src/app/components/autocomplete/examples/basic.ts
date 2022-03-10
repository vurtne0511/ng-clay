import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

const OPTION_ITEMS = [
  '开源组件', '前端框架', '前端组件化'
]

@Component({
  selector: 'example-autocomplete-basic',
  template: `
    <input ntInput type="text" placeholder="输入您要查询的内容"
      [formControl]="keywordControl"
      [ncAutocomplete]="auto">

    <nc-autocomplete #auto="ncAutocomplete" (optionSelected)="onOptionSelected($event)">
      <nc-option *ngFor="let item of options | async" [value]="item">{{ item }}</nc-option>
    </nc-autocomplete>
  `
})
export class ExampleAutocompleteBasicComponent implements OnInit {

  keywordControl = new FormControl('');

  options = new Subject<string[]>();

  ngOnInit() {
    this.keywordControl.valueChanges
    .pipe(
      map(keyword => this.filterOptions(keyword))
    ).subscribe(options => this.options.next(options));
  }

  onOptionSelected(event: any) {

  }

  private filterOptions(keyword: string): string[] {
    const filterValue = this.normalizeValue(keyword);
    return OPTION_ITEMS.filter(item => this.normalizeValue(item).includes(filterValue));
  }

  private normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
}
