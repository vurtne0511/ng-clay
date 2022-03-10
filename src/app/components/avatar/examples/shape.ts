import { Component } from '@angular/core';

@Component({
  selector: 'demo-avatar-shape',
  template: `
    <nc-avatar shape="square" src="/assets/avatar.jpg" ></nc-avatar>
    <nc-avatar shape="circle" src="/assets/avatar.jpg" ></nc-avatar>
  `
})
export class DemoAvatarShapeComponent { }
