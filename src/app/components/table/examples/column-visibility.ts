import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'example-table-column-visibility',
  template: `
  <nc-checkbox-group [(ngModel)]="displayedColumns">
    <nc-checkbox *ngFor="let column of columns" [value]="column.field">
      {{ column.text }}
    </nc-checkbox>
  </nc-checkbox-group>

  <nc-table [dataSource]="dataSource">
    <nc-column [name]="column.field" *ngFor="let column of columns">
      <nc-header-cell *ncHeaderCellDef>{{ column.text }}</nc-header-cell>
      <nc-cell *ncCellDef="let item">{{ item[column.field] }}</nc-cell>
    </nc-column>

    <nc-header-row *ncHeaderRowDef="displayedColumns"></nc-header-row>
    <nc-row *ncRowDef="let row; columns: displayedColumns;"></nc-row>
  </nc-table>
  `
})
export class ExampleTableColumnVisibilityComponent implements OnInit {

  visible = false;

  dataSource = [
    { id: 1, name: '张三', age: 20, address: '北京' },
    { id: 2, name: '李四', age: 22, address: '上海' },
    { id: 3, name: '王五', age: 18, address: '广州' },
    { id: 4, name: '赵六', age: 27, address: '大连' }
  ];

  columns = [
    { field: 'name', visible: true, text: '名称' },
    { field: 'age', visible: true, text: '年龄' },
    { field: 'address', visible: false, text: '地址' }
  ];

  displayedColumns: string[] = [];

  ngOnInit() {
    this.displayedColumns = this.columns
      .filter(col => col.visible)
      .map(col => col.field);
  }
}
