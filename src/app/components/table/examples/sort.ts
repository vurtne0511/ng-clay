import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NcColumnSortChange, NcTableComponent } from '@ng-clay/components/table';

@Component({
  selector: 'example-table-sort',
  template: `
  <nc-table [dataSource]="dataSource" (sortChange)="onSortChange($event)" sort="address:desc">
    <nc-column name="name">
      <nc-header-cell *ncHeaderCellDef>名称</nc-header-cell>
      <nc-cell *ncCellDef="let item">{{ item.name }}</nc-cell>
    </nc-column>

    <nc-column name="age" align="center" sortable>
      <nc-header-cell *ncHeaderCellDef>年龄</nc-header-cell>
      <nc-cell *ncCellDef="let item">{{ item.age }}</nc-cell>
    </nc-column>

    <nc-column name="address" align="right" sortable>
      <nc-header-cell *ncHeaderCellDef>地址</nc-header-cell>
      <nc-cell *ncCellDef="let item">{{ item.address }}</nc-cell>
    </nc-column>

    <nc-header-row *ncHeaderRowDef="displayedColumns"></nc-header-row>
    <nc-row *ncRowDef="let row; columns: displayedColumns;"></nc-row>
  </nc-table>

  <div>
    {{ sortChange | json }}
  </div>
  `
})
export class ExampleTableSortComponent implements AfterViewInit {

  dataSource = [
    { id: 1, name: '张三', age: 20, address: '北京' },
    { id: 2, name: '李四', age: 22, address: '上海' },
    { id: 3, name: '王五', age: 18, address: '广州' },
    { id: 4, name: '赵六', age: 27, address: '大连' }
  ];

  displayedColumns = ['name', 'age', 'address'];

  sortChange!: NcColumnSortChange | NcColumnSortChange[];

  @ViewChild(NcTableComponent, { static: true }) table!: NcTableComponent<any>;

  ngAfterViewInit() { }

  onSortChange(change: NcColumnSortChange | NcColumnSortChange[]) {
    this.sortChange = change;
  }
}
