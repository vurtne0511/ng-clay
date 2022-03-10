import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'example-pagination-basic',
  template: `
    <nc-pagination [total]="total" [pageIndex]="no" [pageSize]="size"></nc-pagination>
  `
})
export class ExamplePaginationBasicComponent implements OnInit {

  total = 16;
  no = 1;
  size = 10;

  ngOnInit() { }
}
