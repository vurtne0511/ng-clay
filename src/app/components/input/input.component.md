


## 代码演示

<div class="grid-x grid-margin-x">
  <div class="medium-6 large-6 cell">
    <nc-example>
      <nc-example-showcase>
        <example-input-basic></example-input-basic>
      </nc-example-showcase>
      <nc-example-legend title="基本">最简单的输入框。</nc-example-legend>
      <nc-example-code [code]="basicCode"></nc-example-code>
    </nc-example>
  </div>
</div>

<div class="grid-x grid-margin-x">
  <div class="medium-6 large-6 cell">
    <nc-example>
      <nc-example-showcase>
        <example-input-group></example-input-group>
      </nc-example-showcase>
      <nc-example-legend title="附加文本">
        带有附加文本的输入框，若需要实现附加文本透明化效果，可以使用<code>transparent</code>属性
      </nc-example-legend>
      <nc-example-code [code]="groupCode"></nc-example-code>
    </nc-example>
  </div>
</div>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| transparent | 属性：附加文本是否透明 | `boolean` | false |
