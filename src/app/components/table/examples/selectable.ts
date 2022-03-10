import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';

@Component({
  selector: 'example-table-selectable',
  template: `

  <table nc-table [dataSource]="dataSource">
    <nc-column name="select">
      <th nc-header-cell *ncHeaderCellDef>
        <nc-checkbox
            (change)="masterToggle()"
            [checked]="selection.hasValue() && isAllSelected()">
        </nc-checkbox>
      </th>
      <td nc-cell *ncCellDef="let item">
      <nc-checkbox
      (click)="$event.stopPropagation()"
      (change)="$event ? selection.toggle(item) : null"
      [checked]="selection.isSelected(item)">
      </nc-checkbox>
      </td>
    </nc-column>


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

    <tr nc-header-row *ncHeaderRowDef="displayedColumns"></tr>
    <tr nc-row *ncRowDef="let row; columns: displayedColumns;" (click)="selection.toggle(row)"></tr>
  </table>
  <div>已选名称：{{selected}}</div>
  `
})
export class ExampleTableSelectableComponent {

  dataSource = [
    { id: 1, name: '张三', age: 20, address: '北京' },
    { id: 2, name: '李四', age: 22, address: '上海' },
    { id: 3, name: '王五', age: 18, address: '广州' },
    { id: 4, name: '赵六', age: 27, address: '大连' }
  ];

  displayedColumns = ['select', 'name', 'age', 'address'];

  selection = new SelectionModel<any>(true, []);
  selected: string = '';


  constructor() {
    this.selection.changed.subscribe((data) => {
      this.selected = (data.source.selected || []).map((item: any) => item.name).join(',');
    });
  }



  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ? this.selection.clear() :  this.dataSource.forEach(row => this.selection.select(row));
  }




}
