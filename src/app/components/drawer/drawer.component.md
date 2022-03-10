
## 何时使用


## 代码演示

<div class="grid-x grid-margin-x">
  <div class="medium-12 large-6 cell">
    <nc-example>
      <nc-example-showcase>
        <example-drawer-basic></example-drawer-basic>
      </nc-example-showcase>
      <nc-example-legend title="基本设置">
        抽屉式弹出框
      </nc-example-legend>
      <nc-example-code [code]="basicCode"></nc-example-code>
    </nc-example>
    <nc-example>
      <nc-example-showcase>
        <example-drawer-backdrop></example-drawer-backdrop>
      </nc-example-showcase>
      <nc-example-legend title="增加遮罩效果">
        通过 backdrop 属性可以增加半透明的遮罩层
      </nc-example-legend>
      <nc-example-code [code]="backdropCode"></nc-example-code>
    </nc-example>
    <nc-example>
      <nc-example-showcase>
        <example-drawer-placement></example-drawer-placement>
      </nc-example-showcase>
      <nc-example-legend title="增加遮罩效果">
        通过 placement 属性可以更换弹出方向
      </nc-example-legend>
      <nc-example-code [code]="placementCode"></nc-example-code>
    </nc-example>
  </div>
  <div class="medium-12 large-6 cell">
    <nc-example>
      <nc-example-showcase>
        <example-drawer-event></example-drawer-event>
      </nc-example-showcase>
      <nc-example-legend title="事件类型">
        Drawer 组件提供 beforeOpen、beforeClosed、afterOpen、afterClosed 4个事件
      </nc-example-legend>
      <nc-example-code [code]="eventCode"></nc-example-code>
    </nc-example>
    <nc-example>
      <nc-example-showcase>
        <example-drawer-nested></example-drawer-nested>
      </nc-example-showcase>
      <nc-example-legend title="限定容器">
        可以在特定的容器内使用 drawer，但是点击事件仅发生在容器内部，在容器元素上增加 nt-drawer-container 指令
      </nc-example-legend>
      <nc-example-code [code]="nestedCode"></nc-example-code>
    </nc-example>
  </div>
</div>

## API


