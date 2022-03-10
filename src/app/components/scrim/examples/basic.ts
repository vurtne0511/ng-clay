import { Component } from '@angular/core';

@Component({
  selector: 'example-scrim-basic',
  template: `
  <nc-table [ncScrim]="isOpen" scrimText="正在加载中..." [dataSource]="dataSource">

    <nc-column name="name">
      <nc-header-cell *ncHeaderCellDef>Name</nc-header-cell>
      <nc-cell *ncCellDef="let item">{{ item.name }}</nc-cell>
    </nc-column>

    <nc-column name="age">
      <nc-header-cell *ncHeaderCellDef>Age</nc-header-cell>
      <nc-cell *ncCellDef="let item">{{ item.age }}</nc-cell>
    </nc-column>

    <nc-column name="address">
      <nc-header-cell *ncHeaderCellDef>Address</nc-header-cell>
      <nc-cell *ncCellDef="let item">{{ item.address }}</nc-cell>
    </nc-column>

    <nc-header-row *ncHeaderRowDef="['name', 'age', 'address']"></nc-header-row>
    <nc-row *ncRowDef="let row; columns: ['name', 'age', 'address'];"></nc-row>
  </nc-table>
  <nc-pagination [total]="300" [pageIndex]="pageIndex" [pageSize]="20" (pageChange)="onPageChange($event)"></nc-pagination>
  `
})
export class ExampleScrimBasciComponent {
  isOpen = false;
  dataSource = [
    {
      name: '张三',
      age: 20,
      address: '北京'
    },
    {
      name: '李四',
      age: 22,
      address: '上海'
    },
    {
      name: '王五',
      age: 18,
      address: '广州'
    },
    {
      name: '赵六',
      age: 27,
      address: '大连'
    }
  ];
  pageIndex = 1;

  onPageChange(index: number) {
    this.pageIndex = index;
    this.isOpen = true;
    setTimeout(_ => this.isOpen = false, 500);
  }
}
