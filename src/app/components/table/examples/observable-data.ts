import { Observable } from 'rxjs/internal/Observable';

import { Component, OnInit } from '@angular/core';

import { ObservableDataService } from './data.service';

@Component({
  selector: 'example-table-observable-data',
  template: `

  <nc-table [dataSource]="dataSource" [ncScrim]="loading">
    <nc-column [name]="column.field" *ngFor="let column of columns">
      <nc-header-cell *ncHeaderCellDef>{{ column.text }}</nc-header-cell>
      <nc-cell *ncCellDef="let item">{{ item[column.field] }}</nc-cell>
    </nc-column>

    <nc-header-row *ncHeaderRowDef="displayedColumns"></nc-header-row>
    <nc-row *ncRowDef="let row; columns: displayedColumns;"></nc-row>
  </nc-table>
  `
})
export class ExampleTableObservableDataComponent implements OnInit {

  dataSource = new Observable<any>();
  loading = true;

  constructor(private observableDataService: ObservableDataService) {

    this.dataSource = this.observableDataService.getPersons();
    this.dataSource.subscribe(() => {
      this.loading = false;
    });

  }

  columns = [
    { field: 'name', visible: true, text: '名称' },
    { field: 'age', visible: true, text: '年龄' },
    { field: 'salary', visible: true, text: '薪水' }
  ];

  displayedColumns: string[] = [];

  ngOnInit() {
    this.displayedColumns = this.columns
      .filter(col => col.visible)
      .map(col => col.field);
  }
}
