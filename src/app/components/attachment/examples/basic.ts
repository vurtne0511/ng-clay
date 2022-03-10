import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'example-attachment-basic',
  template: `
    <nc-radio-group [(ngModel)]="status">
      <nc-radio value="normal">正常</nc-radio>
      <nc-radio value="disabled">禁用</nc-radio>
      <nc-radio value="notrigger">不显示按钮</nc-radio>
    </nc-radio-group>
    <nc-form-field label="文件列表" [messages]="{ required: '请上传文件' }">
      <nc-attachment url="/files/logos" name="file" [formControl]="fileControl"
        [disabled]="status === 'disabled'"
        [notrigger]="status === 'notrigger'">
        <i class="fa fa-paperclip"></i>&nbsp;Select File
      </nc-attachment>
    </nc-form-field>
  `
})
export class ExampleAttachmentBasciComponent {

  fileControl = new FormControl([
    {
      name: "microMsg.1430457292873的副本.jpg",
      link: 'https://www.baidu.com'
    },
    {
      name: "microMsg.1430457292873的副本.jpg",
      link: 'https://www.baidu.com'
    },
    {
      name: "microMsg.1430457292873的副本.jpg",
      link: 'https://www.baidu.com'
    }
  ], [Validators.required, Validators.maxLength(2)]);

  status: string = 'normal';
}
