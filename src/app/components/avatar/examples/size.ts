import { Component } from '@angular/core';

@Component({
  selector: 'demo-avatar-size',
  template: `
    <nc-avatar size="small" [src]="src" ></nc-avatar>
    <nc-avatar size="medium" [src]="src" ></nc-avatar>
    <nc-avatar size="large" [src]="src" ></nc-avatar>
    <nc-avatar style="width: 150px; height: 150px" [src]="src" ></nc-avatar>

  `
})
export class DemoAvatarSizeComponent {
  src = '/assets/avatar.jpg';
}
