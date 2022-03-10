用于展示操作进度，让用户直观的感受到当前状态。

## 何时使用

当需要显示进度为百分比。
当操作需要花费一些时间才能完成时，显示该操作的当前进度。

## 代码演示
<div class="grid-x grid-margin-x">
  <div class="medium-6 large-6 cell">
    <nc-example>
      <nc-example-showcase>
        <example-progress-basic></example-progress-basic>
      </nc-example-showcase>
      <nc-example-legend title="基本">标准的进度条。</nc-example-legend>
      <nc-example-code [code]="basicCode"></nc-example-code>
    </nc-example>
  </div>
  <div class="medium-6 large-6 cell">
    <nc-example>
      <nc-example-showcase>
        <example-progress-circle></example-progress-circle>
      </nc-example-showcase>
      <nc-example-legend title="circle">圆形的进度条。</nc-example-legend>
      <nc-example-code [code]="circleCode"></nc-example-code>
    </nc-example>
  </div>
</div>

<div>
  <nc-markdown [data]="api"></nc-markdown>
</div>


