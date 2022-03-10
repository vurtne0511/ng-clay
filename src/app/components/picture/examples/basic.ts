import { AfterContentInit, Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'example-picture-basic',
  template: `
  <nc-radio-group [(ngModel)]="status">
    <nc-radio value="normal">normal</nc-radio>
    <nc-radio value="readonly">readonly</nc-radio>
    <nc-radio value="disabled">disabled</nc-radio>
    <nc-radio value="notrigger">notrigger</nc-radio>
  </nc-radio-group>
  <nc-form-field label="图片" [messages]="{ required: '请上传图片' }">
    <nc-picture url="/files/logos"
      name="picture"
      [formControl]="pictureControl"
      [notrigger]="status === 'notrigger'"
      [disabled]="status === 'disabled'"
      [readonly]="status === 'readonly'">
      <i class="fa fa-upload"></i>
    </nc-picture>
  </nc-form-field>
  `
})
export class ExamplePictureBasciComponent implements AfterContentInit {

  pictureControl = new FormControl([
    {
      id: '1',
      name: '',
      status: 4,
      thumbnail: 'https://angular.io/assets/images/logos/angular/angular.svg'
    },
    {
      id: '2',
      name: '',
      status: 4,
      thumbnail: 'https://angular.io/assets/images/logos/angular/angular.svg'
    },
    {
      id: '2',
      name: '',
      status: 4,
      thumbnail: 'https://angular.io/assets/images/logos/angular/angular.svg'
    }
  ], [Validators.required, Validators.maxLength(2)]);

  status: string = 'normal';

  constructor() { }

  ngAfterContentInit() { }
}
