import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NcFileSizeError, NcFileTypeError } from '@ng-clay/components/core';

@Component({
  selector: 'example-picture-event',
  styles: [`
      span {
        color: #f5212d;
      }
    `
  ],
  template: `
    <nc-form-field label="图片" [messages]="{ required: '请上传图片' }">
      <nc-picture url="/files/logos" [maxFiles]="2" maxSize="0.5" name="picture" [formControl]="pictureControl"
      (error)="onError($event)">
        <i class="fa fa-upload"></i>
      </nc-picture>
    </nc-form-field>
    <span>{{message}}</span>
  `
})
export class ExamplePictureEventComponent {

  pictureControl = new FormControl([
    {
      id: '1',
      name: '',
      status: 4,
      thumbnail: 'https://angular.io/assets/images/logos/angular/angular.svg'
    }
  ], [Validators.required]);

  message = '';

  /**
   * 错误提示
  */
  onError(error: any) {
    if (error instanceof NcFileSizeError) {
      this.message = `图片不能超过${error.limitSizeString}`;
    }
    if (error instanceof NcFileTypeError) {
      this.message = `不支持图片类型${error.type}`;
    }
    setTimeout(() => {
      this.message = '';
    }, 3000);
  }
}
