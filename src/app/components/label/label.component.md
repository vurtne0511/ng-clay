进行标记和分类的小标签，起到提示或者分类的作用。

## 何时使用

需要按照种类、等级或性质等分别归类时，可以使用。

## 代码演示

<div class="grid-x grid-margin-x">
  <div class="medium-6 large-6 cell">
    <nc-example>
      <nc-example-showcase>
        <example-label-basic></example-label-basic>
      </nc-example-showcase>
      <nc-example-legend title="基本用法">
        直接使用标签。
      </nc-example-legend>
      <nc-example-code [code]="basicCode"></nc-example-code>
    </nc-example>
    <nc-example>
      <nc-example-showcase>
        <example-label-colors></example-label-colors>
      </nc-example-showcase>
      <nc-example-legend title="样式设置">
        共有5种样式 `primary`、`secondry`、`success`、`warning`、`alert`。
      </nc-example-legend>
      <nc-example-code [code]="colorsCode"></nc-example-code>
    </nc-example>
  </div>
  <div class="medium-6 large-6 cell">
    <nc-example>
      <nc-example-showcase>
        <example-label-icon></example-label-icon>
      </nc-example-showcase>
      <nc-example-legend title="使用图标">
        跟图标配合使用。
      </nc-example-legend>
      <nc-example-code [code]="iconCode"></nc-example-code>
    </nc-example>
  </div>
</div>

<div>
  <nc-markdown [data]="api"></nc-markdown>
</div>
