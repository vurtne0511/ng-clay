## 何时使用

按钮用于开始一个即时操作。

## 代码演示

<div class="grid-x grid-margin-x">
  <div class="medium-6 large-6 cell">
    <nc-example>
      <nc-example-showcase>
        <example-notifier-basic></example-notifier-basic>
      </nc-example-showcase>
      <nc-example-legend title="基本">
        默认通知栏会在右上角
      </nc-example-legend>
      <nc-example-code [code]="basicCode"></nc-example-code>
    </nc-example>
  </div>
</div>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| color | 属性：颜色 | `primary`、 `secondry`、 `success`、 `warning`、 `alert` | `primary` |
| size | 属性：提示框大小 | `small`、 `medium`、`large` | `medium` |
| closable | 属性：是否显示关闭按钮 | `boolean` | - |
| closed | 事件：关闭时触发 | `function` | - |

