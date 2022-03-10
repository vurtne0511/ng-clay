## 何时使用

一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。

## 代码演示

<div class="grid-x grid-margin-x">
  <div class="medium-6 large-6 cell">
    <nc-example>
      <nc-example-showcase>
        <example-badge-basic></example-badge-basic>
      </nc-example-showcase>
      <nc-example-legend title="基本">
        最简单的用法，适用于简短的警告提示。
      </nc-example-legend>
      <nc-example-code [code]="basicCode"></nc-example-code>
    </nc-example>
    <nc-example>
      <nc-example-showcase>
        <example-badge-colors></example-badge-colors>
      </nc-example-showcase>
      <nc-example-legend title="颜色">
        最简单的用法，适用于简短的警告提示。
      </nc-example-legend>
      <nc-example-code [code]="colorsCode"></nc-example-code>
    </nc-example>
  </div>
  <div class="medium-6 large-6 cell">
    <nc-example>
      <nc-example-showcase>
        <example-badge-icon></example-badge-icon>
      </nc-example-showcase>
      <nc-example-legend title="图标">
        也可以跟图标配合使用
      </nc-example-legend>
      <nc-example-code [code]="iconCode"></nc-example-code>
    </nc-example>
  </div>
</div>

<div>
  <nc-markdown [data]="api"></nc-markdown>
</div>
