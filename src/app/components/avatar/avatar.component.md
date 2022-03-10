
## 何时使用

显示用户头像

## 代码演示

<div class="grid-x grid-margin-x">
  <div class="medium-6 large-6 cell">
    <nc-example>
      <nc-example-showcase>
        <demo-avatar-basic></demo-avatar-basic>
      </nc-example-showcase>
      <nc-example-legend title="基本设置">
        最简单的用法，设置 `src` 设置用户头像图片路径。
      </nc-example-legend>
      <nc-example-code [code]="basicCode"></nc-example-code>
    </nc-example>
    <nc-example>
      <nc-example-showcase>
        <demo-avatar-size></demo-avatar-size>
      </nc-example-showcase>
      <nc-example-legend title="大小设置">
        通过设置 `size` 改变用户头像大小。<br> 可选字段 `small`、 `medium`、`large`, 也可以通过样式自定义大小。
      </nc-example-legend>
      <nc-example-code [code]="sizeCode"></nc-example-code>
    </nc-example>
  </div>
  <div class="medium-6 large-6 cell">
    <nc-example>
      <nc-example-showcase>
        <demo-avatar-shape></demo-avatar-shape>
      </nc-example-showcase>
      <nc-example-legend title="形状设置">
        通过设置 `shape` 属性，改变用户头像形状。 默认圆角方形
      </nc-example-legend>
      <nc-example-code [code]="shapeCode"></nc-example-code>
    </nc-example>
  </div>
</div>

<div>
  <nc-markdown [data]="api"></nc-markdown>
</div>
