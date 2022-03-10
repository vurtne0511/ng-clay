import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NcFileSizeError, NcFileTypeError } from '@ng-clay/components/core';

@Component({
  selector: 'example-attachment-accept',
  styles: [`
      span {
        color: #f5212d;
      }
    `
  ],
  template: `
    <nc-form-field label="文件列表" [messages]="{ required: '请上传文件' }">
      <nc-attachment url="/files/logos"
        name="file"
        [formControl]="fileControl"
        accept="image/png, text/css"
        (error)="onError($event)">
        <i class="fa fa-paperclip"></i>&nbsp;Select File
      </nc-attachment>
    </nc-form-field>
    <span>{{message}}</span>
  `
})
export class ExampleAttachmentAcceptComponent {

  fileControl = new FormControl([
    {
      name: "microMsg.1430457292873的副本.jpg",
      link: 'https://www.baidu.com'
    }
  ], [Validators.required, Validators.maxLength(2)]);

  message = '';

  /**
   * 错误提示
  */
  onError(error: unknown) {
    if (error instanceof NcFileSizeError) {
      this.message = `文件不能超过${error.limitSizeString}`;
    }
    if (error instanceof NcFileTypeError) {
      this.message = `不支持文件类型${error.type}`;
    }
    // if (error instanceof NcFileUploadError) {
    //   this.message = `${error.statusText}`;
    // }
    setTimeout(() => {
      this.message = '';
    }, 3000);
  }
}
