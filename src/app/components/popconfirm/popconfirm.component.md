
点击元素，弹出气泡式的确认框。

## 何时使用

* 目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户。
* 和 confirm 弹出的全屏居中模态对话框相比，交互形式更轻量。

## 代码演示

<div class="grid-x grid-margin-x">
  <div class="medium-6 large-6 cell">
    <nc-example>
      <nc-example-showcase>
        <example-popconfirm-basic></example-popconfirm-basic>
      </nc-example-showcase>
      <nc-example-legend title="基本">最简单的下拉菜单。</nc-example-legend>
      <nc-example-code [code]="basicCode"></nc-example-code>
    </nc-example>
    <nc-example>
      <nc-example-showcase>
        <example-popconfirm-position></example-popconfirm-position>
      </nc-example-showcase>
      <nc-example-legend title="位置">位置有十二个方向。通过 `position` 设置</nc-example-legend>
      <nc-example-code [code]="positionCode"></nc-example-code>
    </nc-example>
  </div>
  <div class="medium-6 large-6 cell">
    <nc-example>
      <nc-example-showcase>
        <example-popconfirm-text></example-popconfirm-text>
      </nc-example-showcase>
      <nc-example-legend title="按钮文字">通过 `confirmText` 和 `cancelText` 设置自定义按钮文字。</nc-example-legend>
      <nc-example-code [code]="textCode"></nc-example-code>
    </nc-example>
    <nc-example>
      <nc-example-showcase>
        <example-popconfirm-change></example-popconfirm-change>
      </nc-example-showcase>
      <nc-example-legend title="确认框事件">可用 `afterOpen`、`afterClosed`、`beforeOpen`、`beforeClosed` 监听确认框显示前后、消失前后事件。</nc-example-legend>
      <nc-example-code [code]="changeCode"></nc-example-code>
    </nc-example>
  </div>
</div>


<div>
  <nc-markdown [data]="api"></nc-markdown>
</div> 
