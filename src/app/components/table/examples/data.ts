import { Component } from '@angular/core';
import { NcTableDataSource } from '@ng-clay/components/table';

@Component({
  selector: 'example-table-data',
  template: `
  <input type="text" class="margin-bottom-1" ncInput (keyup)="applyFilter($event)" placeholder="筛选">
  <table nc-table [dataSource]="dataSource">
    <nc-column name="name">
      <th nc-header-cell *ncHeaderCellDef>名称</th>
      <td nc-cell *ncCellDef="let item">{{ item.name }}</td>
    </nc-column>

    <nc-column name="age">
      <th nc-header-cell *ncHeaderCellDef>年龄</th>
      <td nc-cell *ncCellDef="let item">{{ item.age }}</td>
    </nc-column>

    <nc-column name="address">
      <th nc-header-cell *ncHeaderCellDef>地址</th>
      <td nc-cell *ncCellDef="let item">{{ item.address }}</td>
    </nc-column>

    <tr nc-header-row *ncHeaderRowDef="displayedColumns;"></tr>
    <tr nc-row *ncRowDef="let row; columns: displayedColumns;"></tr>
  </table>
  `
})
export class ExampleTableDataComponent {

  dataSource: NcTableDataSource<any> = new NcTableDataSource([
    { id: 1, name: '张三', age: 20, address: '北京' },
    { id: 2, name: '李四', age: 22, address: '上海' },
    { id: 3, name: '王五', age: 18, address: '广州' },
    { id: 4, name: '赵六', age: 27, address: '大连' }
  ]);

  displayedColumns = ['name', 'age', 'address'];

  applyFilter(event: KeyboardEvent) {
    this.dataSource.filter = (event.target as HTMLInputElement).value.trim().toLowerCase();
  }

}
