
## 代码演示

<div class="grid-x grid-margin-x">
  <div class="medium-6 large-6 cell">
    <nc-example>
      <nc-example-showcase>
        <example-switch-basic></example-switch-basic>
      </nc-example-showcase>
      <nc-example-legend title="基本">
      最简单的用法。默认为方形形状的开关
      </nc-example-legend>
      <nc-example-code [code]="basicCode"></nc-example-code>
    </nc-example>
  </div>
  <div class="medium-6 large-6 cell">
    <nc-example>
      <nc-example-showcase>
        <example-switch-circle></example-switch-circle>
      </nc-example-showcase>
      <nc-example-legend title="形状">
        如果你想要圆形，也可以通过 `circle` 属性来设置圆形开关
      </nc-example-legend>
      <nc-example-code [code]="circleCode"></nc-example-code>
    </nc-example>
  </div>
  <div class="medium-6 large-6 cell">
    <nc-example>
      <nc-example-showcase>
        <example-switch-size></example-switch-size>
      </nc-example-showcase>
      <nc-example-legend title="大小">
        通过`class` 设置 switch 大小
      </nc-example-legend>
      <nc-example-code [code]="sizeCode"></nc-example-code>
    </nc-example>
  </div>
  <div class="medium-6 large-6 cell">
    <nc-example>
      <nc-example-showcase>
        <example-switch-disabled></example-switch-disabled>
      </nc-example-showcase>
      <nc-example-legend title="禁用">
        通过`disabled`属性 设置 switch 禁用 状态
      </nc-example-legend>
      <nc-example-code [code]="disabledCode"></nc-example-code>
    </nc-example>
  </div>
  <div class="medium-6 large-6 cell">
    <nc-example>
      <nc-example-showcase>
        <example-switch-checked></example-switch-checked>
      </nc-example-showcase>
      <nc-example-legend title="禁用">
        通过`checked`属性 设置 switch 选中状态
      </nc-example-legend>
      <nc-example-code [code]="checkedCode"></nc-example-code>
    </nc-example>
  </div>
  <div class="medium-6 large-6 cell">
    <nc-example>
      <nc-example-showcase>
        <example-switch-change></example-switch-change>
      </nc-example-showcase>
      <nc-example-legend title="禁用">
        通过`change` 方法  监听状态变化
      </nc-example-legend>
      <nc-example-code [code]="changeCode"></nc-example-code>
    </nc-example>
  </div>
</div>

<div>
  <nc-markdown [data]="api"></nc-markdown>
</div>
