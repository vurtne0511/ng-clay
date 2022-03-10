import { Component } from '@angular/core';

@Component({
  selector: 'example-form-inline',
  template: `
  <div class="grid-x grid-margin-x">
    <div class="cell medium-6 large-4">
      <form (ngSubmit)="onLogin()" ntFormOrientation="horizontal">
        <nc-form-field label="用户名">
          <input ntInput type="text" name="username" [(ngModel)]="username" placeholder="用户名" required>
        </nc-form-field>
        <nc-form-field label="密码">
          <textarea ntInput name="password" [(ngModel)]="textarea" placeholder="密码" required></textarea>
        </nc-form-field>
        <nc-form-field labelVisible="false">
          <button type="submit" class="button expanded">Login</button>
        </nc-form-field>
      </form>
    </div>
  </div>
  `
})
export class ExampleFormInlineComponent {

  username = '';
  textarea = '';

  constructor() {

  }

  onLogin() {

  }
}
