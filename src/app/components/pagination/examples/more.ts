import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'example-pagination-more',
  template: `
<!--    <nc-pagination [total]="total" [pageIndex]="no" [pageSize]="size"></nc-pagination>-->
    <nc-pagination [total]="total" [pageIndex]="no" [pageSize]="size" (pageChange)="onPageChange($event)"></nc-pagination>
  `
})
export class ExamplePaginationMoreComponent implements OnInit {

  total = 500;
  no = 1;
  size = 10;

  ngOnInit() { }

  onPageChange(index: number) {
    console.log(index);
    this.no = index;
  }
}
