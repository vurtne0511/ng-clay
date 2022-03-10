## 何时使用

* 在一组可选项中进行多项选择时；
* 单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。

## 代码演示

<div class="grid-x grid-margin-x">
  <div class="medium-6 large-6 cell">
    <nc-example>
      <nc-example-showcase>
        <example-checkbox-basic></example-checkbox-basic>
      </nc-example-showcase>
      <nc-example-legend title="基本">最简单的复选框</nc-example-legend>
      <nc-example-code [code]="basicCode"></nc-example-code>
    </nc-example>
    <nc-example>
      <nc-example-showcase>
        <example-checkbox-change></example-checkbox-change>
      </nc-example-showcase>
      <nc-example-legend title="状态改变事件">监听 checkbox 值的改变</nc-example-legend>
      <nc-example-code [code]="changeCode"></nc-example-code>
    </nc-example>
  </div>
  <div class="medium-6 large-6 cell">
    <nc-example>
      <nc-example-showcase>
        <example-checkbox-disabled></example-checkbox-disabled>
      </nc-example-showcase>
      <nc-example-legend title="禁用">禁用的复选框</nc-example-legend>
      <nc-example-code [code]="disabledCode"></nc-example-code>
    </nc-example>
    <nc-example>
      <nc-example-showcase>
        <example-checkbox-all></example-checkbox-all>
      </nc-example-showcase>
      <nc-example-legend title="全选">多选和全选</nc-example-legend>
      <nc-example-code [code]="allCode"></nc-example-code>
    </nc-example>
  </div>
</div>

## API  

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked | 是否选中 | `boolean` | true |
| required | 必须输入标识（只在模板驱动表单有效） | `boolean` | false |
| disabled | 是否禁用 | `boolean` | true |
| indeterminate | 设置全选状态 | `boolean` | - |

## 方法  

| 参数 | 说明 | 默认值 |
| --- | --- | --- | --- |
| change | 状态改变时回调 | - |
